import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Button from './Button';
import FormLabel from './FormLabel';
import FormExplanationMessage from './FormExplanationMessage';
import FormValidationMessage from './FormValidationMessage';
import Message from './Message';
import ToggleButton from './ToggleButton';
import Dropdown from './Dropdown';
import DropdownMenuItem from './DropdownMenuItem';
import { UtilitySystem } from '../UtilitySystem';

import { BACKSPACE_KEY, DELETE_KEY, ENTER_KEY } from '../constants';

class VariableMessage extends React.Component {
  currentDraggedSpanVariable = '';
  state = {
    message: this.props.initialValue || '',
    available: [],
    variablesOfCategory: [],
    categories: [],
    selectedCategory: this.props.defaultSelectedCategory || '',
    precedingChar: '',
    // isSafariBrowser: false,
    placeholder: this.props.placeholder,
  };

  componentDidMount() {
    this.handleCursorSet();
    // this.checkForSafariBrowser();

    const toUpdateState = {
      categories: [],
      variablesOfCategory: [],
    };

    if (this.props.isCategoryAvailable) {
      this.props.variables.forEach((item) => {
        if (!toUpdateState.categories.includes(item.category)) {
          toUpdateState.categories.push(item.category);
        }
        if (item.category === this.props.defaultSelectedCategory) {
          toUpdateState.variablesOfCategory.push(item);
        }
      });
    }

    this.compose.textContent = this.props.initialValue;
    this.setState(toUpdateState, () => this.handleInitValue());
  }

  componentDidUpdate(prevProps) {
    if (this.props.initialValue !== prevProps.initialValue) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(
        {
          message: this.props.initialValue,
        },
        this.handleInitValue,
      );
    }
  }

  // componentWillUnmount() {
  //   if (this.state.isSafariBrowser) {
  //     window.removeEventListener('touchmove', (event) => {
  //       const editorDivId = `variable-message-input-${this.id}`;

  //       if (event.target.id === editorDivId) {
  //         this.compose.focus();
  //       } else {
  //         this.compose.blur();
  //       }
  //     });
  //   }
  // }

  // checkForSafariBrowser = () => {
  //   const ua = navigator.userAgent.toLowerCase();
  //   let isSafariBrowser = false;
  //   if (ua.indexOf('safari') !== -1) {
  //     if (ua.indexOf('chrome') > -1) {
  //       // Chrome
  //       isSafariBrowser = false;
  //     } else {
  //       // Safari
  //       isSafariBrowser = true;
  //     }
  //   }
  //   this.setState({ isSafariBrowser }, () => this.addScrollEventForSafari());
  // }

  // addScrollEventForSafari() {
  //   if (this.state.isSafariBrowser) {
  //     window.addEventListener('touchmove', (event) => {
  //       const editorDivId = `variable-message-input-${this.id}`;

  //       if (event.target.id === editorDivId) {
  //         this.compose.focus();
  //       } else {
  //         this.compose.blur();
  //       }
  //     });
  //   }
  // }

  /**
   * Retrieves variables
   * Puts them in a flat-level array since some could be inside of `<optgroup>`s
   * @param  {array} array
   * @return {array}
   */
  getVariables = (array) => array.filter((item) => item.id !== -1).reduce((a, b) => a.concat(b.options || b), []);

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  /**
   * Update variable insertion point and cursor position
   * @param  {string} text
   * @return {void}
   */
  insertTextAtCursor = (text, paste = false) => {
    const sel = window.getSelection();
    // Make sure we're focused on the compose element
    this.compose.focus();

    if (sel.getRangeAt && sel.rangeCount) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      if (paste) {
        range.insertNode(document.createTextNode(text));
      } else {
        range.insertNode(text);
      }

      // calling deleteContents and replacing with HTML leaves behind an empty node, so here we clean discard it.
      const newRange = range.cloneRange();
      range.setEndBefore(text);
      newRange.setStartAfter(text);
      newRange.setEndAfter(text);
      sel.removeAllRanges();
      sel.addRange(newRange);
      // get newly added character preceding caret
      this.getCharacterPrecedingCaret(this.compose);
    }
  };

  handleBackspace = async (e) => {
    const isNewWord = this.state.precedingChar.trim() === '';
    this.handleComposeInput();
    if (!isNewWord && e && window.getSelection && (e.which === BACKSPACE_KEY || e.which === DELETE_KEY)) {
      const selection = window.getSelection();
      if (!selection.isCollapsed || !selection.rangeCount) {
        return;
      }

      const curRange = selection.getRangeAt(0);
      // checking if we are deleting in the middle of a text string, in which case FF will handle backspace as expected
      if (curRange.commonAncestorContainer.nodeType === 3 && curRange.startOffset > 0) {
        return;
      }

      const range = document.createRange();
      if (selection.anchorNode !== this.compose) {
        // selection is in character mode. expand it to the whole editable field
        range.selectNodeContents(this.compose);
        range.setEndBefore(selection.anchorNode);
      } else if (selection.anchorOffset > 0) {
        range.setEnd(this.compose, selection.anchorOffset);
      } else {
        // reached the beginning of editable field
        return;
      }
      range.setStart(this.compose, range.endOffset - 1);
      const previousNode = range.cloneContents().lastChild;
      // checking if we are actually deleting an HTML node
      if (previousNode && previousNode.contentEditable === 'false') {
        // do not fire the backspace event, otherwise two characters will be deleted
        e.preventDefault();
        range.deleteContents();
        const message = this.compose.textContent;
        await new Promise((resolve) => this.setState({ message }, resolve));
      }
    }
  };

  /**
   * Transform `{}` into styled component
   * @param  {string} text
   * @return {node}
   */
  transformVar = (variableSet) => {
    // Re-assign text value for processing
    let { variable } = variableSet;
    const { value } = variableSet;

    // Replace text contents of variable to hide squigglies
    const regexSquiggles = /{(.*)?}/g;
    variable = variable.replace(regexSquiggles, '<i>{</i><div>$1</div><i>}</i>');

    // Replace text contents of variable to hide underscore
    const regexUnderscores = /_/g;
    variable = variable.replace(regexUnderscores, '</div><b>_</b><div>');

    // Build variable UI
    const $variable = document.createElement('span');

    $variable.setAttribute('spellcheck', false);
    // Do not allow the variable to be edited
    /* Added this check for IE and Edge support */
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    const trident = ua.indexOf('Trident/');
    if (msie > 0 || trident > 0) {
      $variable.setAttribute('contenteditable', true);
    } else {
      $variable.setAttribute('contenteditable', false);
    }
    /* Added this check for IE and Edge support */

    // $variable.setAttribute('draggable', true);
    // document.addEventListener('dragstart', (event) => {
    //   if (event.target.id === `span-${value}`) {
    //     this.onVariableDragStart(event, variableSet);
    //   }
    // });
    $variable.setAttribute('id', `span-${value}`);
    $variable.classList.add('variable-message__variable');
    $variable.innerHTML = variable;

    if (!this.props.readOnly) {
      const $close = document.createElement('span');
      $close.classList.add('variable-message__close');
      $variable.appendChild($close);
    }

    return $variable;
  };

  /**
   * Insert variable in cursor position
   * @param  {string} text
   * @return {void}
   */
  insertVariable = (variableSet) => {
    const $variable = this.transformVar(variableSet);
    this.insertTextAtCursor($variable);
  };

  removeVariable = (text) => {
    const variables = this.getVariables(this.props.variables);
    const split = this.state.message
      .split(text)
      .join('')
      .split(/({.*?})/);
    const lowercaseSplit = split.map((e) => e.toLowerCase());

    variables
      .filter((variable) => variable.value !== text)
      .forEach((value) => {
        const { variable } = value;
        const isVariablePresent = lowercaseSplit.includes(variable.toLowerCase());
        // See if we've found one in our `initialValue`
        if (isVariablePresent) {
          const variableIndex = lowercaseSplit.indexOf(variable.toLowerCase());
          split[variableIndex] = this.transformVar(value).outerHTML;
        }
      });

    this.compose.innerHTML = split.join('');
  };

  handleInitValue = (message = this.props.initialValue) => {
    const initialValue = message;
    // Get flat-level list of all variables
    const variables = this.getVariables(this.props.variables);
    // Split `initialValue` to target variables
    const split = initialValue.split(/({.*?})/);

    const lowercaseSplit = split.map((e) => e.toLowerCase());
    const available = [];
    // Loop through variables
    variables.forEach((item) => {
      const { variable, id } = item;
      const isVariablePresent = lowercaseSplit.includes(variable.toLowerCase());
      // See if we've found one in our `initialValue`
      if (isVariablePresent) {
        // If so, transform the variable into HTML
        const variableIndex = lowercaseSplit.indexOf(variable.toLowerCase());
        split[variableIndex] = this.transformVar(item).outerHTML;
      } else {
        available.push(id);
      }
    });

    this.setState({ available });

    // Set message content equal to new mixed content
    this.compose.innerHTML = split.join('');

    // Manually trigger `input` update
    this.handleComposeInput();
  };

  /**
   * Handle variable selection from `<Select>`
   * @param  {string} name  input[name]
   * @param  {string} value input[value]
   * @return {void}
   */
  handleVariableSelection = (variableSet) => {
    const { id, variable } = variableSet;

    if (variable) {
      // Get variable value
      this.setState(
        (prevState) => {
          const index = prevState.available.indexOf(id);
          if (index > -1) {
            prevState.available.splice(index, 1);
            this.insertVariable(variableSet);
          } else {
            prevState.available.push(id);
            this.removeVariable(variable);
          }
          return { available: prevState.available };
        },
        () => {
          // Focus back on compose element
          this.compose.focus();
          this.handleComposeInput();
        },
      );
    }
  };

  /**
   * Disable `<enter>` within compose window
   * @param  {event} e
   * @return {void}
   */
  handleComposeKeypress = (e) => {
    if (e.which === ENTER_KEY) {
      e.preventDefault();
    }
  };

  getCharacterPrecedingCaret = (containerEl) => {
    let precedingChar = '';
    let sel;
    let range;
    let precedingRange;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount > 0) {
        range = sel.getRangeAt(0).cloneRange();
        range.collapse(true);
        range.setStart(containerEl, 0);
        precedingChar = range.toString().slice(-1);
      }
    } else if (sel === document.selection && sel.type !== 'Control') {
      range = sel.createRange();
      precedingRange = range.duplicate();
      precedingRange.moveToElementText(containerEl);
      precedingRange.setEndPoint('EndToStart', range);
      precedingChar = precedingRange.text.slice(-1);
    }
    this.setState({ precedingChar });
  };

  handleCursorSet = async (e) => {
    this.compose.focus();
    this.getCharacterPrecedingCaret(this.compose);
    await this.handleBackspace(e);
    const available = [];
    const split = this.state.message.split(/({.*?})/);
    const lowercaseSplit = split.map((el) => el.toLowerCase());
    const variables = this.getVariables(this.props.variables);
    variables.forEach((value) => {
      const { variable } = value;
      const foundVariable = lowercaseSplit.indexOf(variable.toLowerCase());

      // See if we've found one in our current message
      if (foundVariable === -1) {
        // If so, transform the variable into HTML
        available.push(value.id);
      }
    });

    this.setState({ available });
    // update the parent with the new text contents
    this.handleComposeInput();
  };

  /**
   * Make sure we force plain-text on paste
   * @param  {event} e
   * @return {void}
   */
  handlePaste = (e) => {
    e.preventDefault();

    if (e.clipboardData && e.clipboardData.getData) {
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, text);
    } else if (window.clipboardData && window.clipboardData.getData) {
      const text = window.clipboardData.getData('Text');

      this.insertTextAtCursor(text, true);
    }
  };

  /**
   * Handle updating live-preview and variable swap
   * @return {void}
   */
  handleComposeInput = () => {
    /* Reverting Placeholder to it's original value when there is no text in template message area */
    if (this.state.message === '') {
      this.setState({ placeholder: this.props.placeholder });
    }
    /* Reverting Placeholder to it's original value when there is no text in template message area */

    // Get the rawMessage content to return onInput
    const rawMessage = this.compose && this.compose.textContent;
    // Get only the text representation of the message
    // so we can update our DB with it
    let message = rawMessage;
    const $preview = ReactDOM.findDOMNode(this.preview);

    // Update state
    this.setState({
      message,
    });
    // Search text to determine if variables are found in it
    this.getVariables(this.props.variables).forEach((value) => {
      const { variable } = value;

      if (variable) {
        // We found the text
        if (message && message.search(variable) !== -1) {
          // Swap out variables for data
          const regex = new RegExp(variable);
          message = message.replace(regex, value.variableValue);
        }
      }
    });

    // Take away any trailing space
    if (message === ' ') {
      message = '';
    }

    // Update preview
    // May not be there based on `readOnly` prop
    if ($preview) {
      $preview.innerHTML = message;
    }

    if (this.props.onInput) {
      this.props.onInput(this.props.name, rawMessage, message);
    }
  };

  /**
   * Determine if we should show reset option
   * Tests for both the reset prop and if the initialValue is not equal to the current message state
   * @return {boolean}
   */
  showReset = () => this.props.reset && this.props.initialValue && this.props.initialValue !== this.state.message;

  renderToggleButtons = (variables) =>
    variables
      .filter((variable) => variable.id !== -1)
      .map((v) => {
        // const isDraggable = this.state.available.indexOf(v.id) >= 0;
        if (v.options) {
          return this.renderToggleButtons(v.options);
        }
        return (
          <ToggleButton
            available={this.state.available.includes(v.id)}
            variable={v}
            key={v.id}
            onClick={this.handleVariableSelection}
            // draggable={isDraggable}
            id={v.value}
            // onDragStart={this.onVariableDragStart}
          >
            {v.value}
          </ToggleButton>
        );
      });

  changeCategoryHandler = (category) => {
    /* placeholder added in template message when switch the category, So removing placeholder by emppty string */
    if (this.state.message !== '') {
      this.setState({ placeholder: '' });
    }
    /* placeholder added in template message when switch the category, So removing placeholder by emppty string */
    this.setState(
      {
        variablesOfCategory: this.props.variables.filter((item) => item.category === category),
        selectedCategory: category,
      },
      () => this.handleInitValue(this.state.message),
    );
  };

  renderCategoryMobileView = () => {
    const {
      characterCountTitle,
      variableExplanationMessage,
      showCharacterCounter,
      characterCountWarningLength,
    } = this.props;
    const { message, variablesOfCategory, selectedCategory } = this.state;
    const characterCounterClasses = cx('variable-message__character-count', {
      'variable-message__character-count--warning': message.length >= characterCountWarningLength,
    });

    return (
      <div className="category-mobile-view">
        <FormLabel className="u-block u-m-t" id="Variables">
          Variables
        </FormLabel>
        <div className="category-dropdown">
          <Dropdown label={selectedCategory} wide block>
            {this.state.categories.map((item) => (
              <DropdownMenuItem key={item} id={item} label={item} onClick={() => this.changeCategoryHandler(item)} />
            ))}
          </Dropdown>
        </div>
        <div className="category-variable-list u-m-y u-p-a">
          {variableExplanationMessage && <div className="u-text-muted u-text-small">{variableExplanationMessage}</div>}
          <div className="category-message__footer__variable__list">
            {this.renderToggleButtons(variablesOfCategory)}
          </div>
        </div>
        {showCharacterCounter && (
          <div title={characterCountTitle} className={characterCounterClasses}>
            {message.length}
          </div>
        )}
      </div>
    );
  };

  renderCategoryWebView = () => {
    const {
      characterCountTitle,
      variableExplanationMessage,
      showCharacterCounter,
      characterCountWarningLength,
    } = this.props;
    const { message, variablesOfCategory, selectedCategory } = this.state;
    const characterCounterClasses = cx('variable-message__character-count', {
      'variable-message__character-count--warning': message.length >= characterCountWarningLength,
    });

    return (
      <div className="category-web-view">
        <FormLabel className="u-block u-m-t" id="Variables">
          Variables
        </FormLabel>
        <div className="category-message__footer">
          <div className="column-4 category-message__footer__category__list">
            {this.state.categories.map((item) => {
              const activeClass = selectedCategory === item ? 'category-message__footer__category__active' : '';
              return (
                <div
                  key={item}
                  className={`u-p-a-small category-message__footer__category ${activeClass}`}
                  onClick={() => this.changeCategoryHandler(item)}
                >
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
          <div
            className="column-8 u-p-a category-variables__section"
            onDrop={(event) => this.variableStackDropHandler(event)}
            onDragOver={(event) => event.preventDefault()}
          >
            {variableExplanationMessage && (
              <div className="u-text-muted u-text-small">{variableExplanationMessage}</div>
            )}
            <div className="category-message__footer__variable__list">
              {this.renderToggleButtons(variablesOfCategory)}
            </div>
          </div>
        </div>
        {showCharacterCounter && (
          <div title={characterCountTitle} className={characterCounterClasses}>
            {message.length}
          </div>
        )}
      </div>
    );
  };

  renderVariableView = () => {
    const {
      characterCountTitle,
      variableExplanationMessage,
      showCharacterCounter,
      characterCountWarningLength,
      variables,
    } = this.props;
    const { message } = this.state;
    const characterCounterClasses = cx('variable-message__character-count', {
      'variable-message__character-count--warning': message.length >= characterCountWarningLength,
    });

    return (
      <>
        <div
          // onDrop={event => this.variableStackDropHandler(event)}
          // onDragOver={event => event.preventDefault()}
          className="variable-message__footer"
        >
          {variableExplanationMessage && (
            <div className="variable-message__explanation">{variableExplanationMessage}</div>
          )}
          <div className="variable-message__footer__variable__list">{this.renderToggleButtons(variables)}</div>
        </div>
        {showCharacterCounter && (
          <div title={characterCountTitle} className={characterCounterClasses}>
            {message.length}
          </div>
        )}
      </>
    );
  };

  // onVariableDragStart = (event, variable) => {
  //   const data = this.transformVar(variable);
  //   this.currentDraggedSpanVariable = variable;
  //   if (event.persist) event.persist();
  //   event.dataTransfer.setData('text/html', data.outerHTML);
  //   event.dataTransfer.setData('variableId', variable.id);
  // }

  // composeMessageDropHandler = (event) => {
  //   const variableId = event.dataTransfer.getData('variableId');
  //   setTimeout(() => {
  //     const text = document.getElementById(`span-${this.currentDraggedSpanVariable.value}`);
  //     this.insertTextAtCursorOnDrag(text);
  //     this.addSpaceAfterAction(text);
  //   }, 0);

  //   if (variableId) {
  //     this.setState((prevState) => {
  //       const index = prevState.available.indexOf(Number(variableId));
  //       if (index > -1) {
  //         prevState.available.splice(index, 1);
  //       } else {
  //         prevState.available.push(Number(variableId));
  //       }
  //       return ({ available: prevState.available });
  //     });
  //     event.dataTransfer.clearData();
  //   }
  // }

  // variableStackDropHandler(event) {
  //   const variableId = event.dataTransfer.getData('variableId');
  //   const variableSet = this.props.variables.find(item => item.id === Number(variableId));

  //   this.setState((prevState) => {
  //     prevState.available.push(Number(variableId));
  //     this.removeVariable(variableSet.variable);
  //     return ({ available: prevState.available });
  //   }, () => {
  //     // Focus back on compose element
  //     this.compose.focus();
  //     this.handleComposeInput();
  //     this.composeMessageViewHandler('true');
  //   });
  // }

  //
  // insertTextAtCursorOnDrag = (text) => {
  //   let range = document.createRange();
  //   const sel = window.getSelection();
  //   // Make sure we're focused on the compose element
  //   this.compose.focus();
  //
  //   if (sel.getRangeAt && sel.rangeCount) {
  //     range = sel.getRangeAt(0);
  //     range.deleteContents();
  //
  //     // Move caret
  //     range.setStartAfter(text);
  //     range.setEndAfter(text);
  //     sel.removeAllRanges();
  //     sel.addRange(range);
  //   }
  // }
  //
  // addSpaceAfterAction = (text) => {
  //   const spanSpace = document.createElement('span');
  //   const sel = window.getSelection();
  //   const range = document.createRange();
  //
  //   spanSpace.innerHTML = ' ';
  //   text.insertAdjacentElement('afterend', spanSpace);
  //
  //   // this.handleComposeInput();
  //   // Move caret
  //   range.setStartAfter(spanSpace);
  //   range.setEndAfter(spanSpace);
  //   sel.removeAllRanges();
  //   sel.addRange(range);
  // }

  // composeMessageViewHandler = (contentEditable = null) => {
  //   if (contentEditable) {
  //     this.compose.contentEditable = contentEditable;
  //     return;
  //   }
  //   if (this.state.available.indexOf(Number(this.currentDraggedSpanVariable.id)) < 0) {
  //     this.compose.contentEditable = 'false';
  //   } else {
  //     this.compose.contentEditable = 'true';
  //   }
  // }

  render() {
    const {
      className,
      composeLabel,
      explanationMessage,
      previewLabel,
      name,
      readOnly,
      required,
      validationMessage,
      displayMessageAreaOnly,
      isCategoryAvailable,
    } = this.props;
    const classes = cx('form__group variable-message', className);
    const variableMessageInputName = `variable-message-input-${this.id}`;
    const variableMessagePreviewName = `variable-message-preview-${this.id}`;

    return (
      <div className={classes}>
        {!displayMessageAreaOnly && (
          <div className="variable-message__header">
            <FormLabel className="variable-message__label" id={variableMessageInputName} required={required}>
              {composeLabel}
            </FormLabel>
            {this.showReset() && (
              <div className="variable-message__reset">
                <Button reset className="u-text-muted u-text-small" onClick={() => this.handleInitValue()}>
                  Undo
                </Button>
              </div>
            )}
          </div>
        )}
        <div style={{ position: 'relative' }}>
          <div
            // onDrop={event => this.composeMessageDropHandler(event)}
            // onDragOver={() => this.composeMessageViewHandler()}
            // onDragLeave={() => this.composeMessageViewHandler('true')}
            id={variableMessageInputName}
            className="variable-message__compose"
            contentEditable={!readOnly}
            onInput={this.handleComposeInput}
            onClick={this.handleCursorSet}
            onFocus={this.handleComposeInput}
            onKeyPress={this.handleComposeKeypress}
            onKeyUp={this.handleCursorSet}
            onPaste={this.handlePaste}
            name={name}
            ref={(ref) => (this.compose = ref)}
            placeholder={this.state.placeholder}
          />
        </div>
        <FormExplanationMessage explanationMessage={explanationMessage} />
        <FormValidationMessage validationMessage={validationMessage} />
        {!displayMessageAreaOnly && (
          <>
            {isCategoryAvailable === true ? (
              <>
                {/* play with css via display property. */}
                {this.renderCategoryMobileView()}
                {this.renderCategoryWebView()}
              </>
            ) : (
              this.renderVariableView()
            )}
            <div className="variable-message__preview">
              <FormLabel className="u-block" id={variableMessagePreviewName}>
                {previewLabel}
              </FormLabel>
              <Message type="primary" direction="inbound" ref={(ref) => (this.preview = ref)} />
            </div>
          </>
        )}
      </div>
    );
  }
}

VariableMessage.propTypes = {
  characterCountTitle: PropTypes.string,
  characterCountWarningLength: PropTypes.number,
  className: PropTypes.string,
  composeLabel: PropTypes.string,
  explanationMessage: PropTypes.string,
  variableExplanationMessage: PropTypes.string,
  previewLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  reset: PropTypes.bool,
  variables: PropTypes.array.isRequired,
  defaultSelectedCategory: PropTypes.string,
  isCategoryAvailable: PropTypes.bool,
  onInput: PropTypes.func,
  initialValue: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  showCharacterCounter: PropTypes.bool,
  validationMessage: PropTypes.string,
  displayMessageAreaOnly: PropTypes.bool,
  placeholder: PropTypes.string,
};

VariableMessage.defaultProps = {
  composeLabel: 'Message',
  previewLabel: 'Preview',
  displayMessageAreaOnly: false,
  placeholder: '',
  variableExplanationMessage: 'Click to add/remove variables into your message:',
};

export default VariableMessage;
