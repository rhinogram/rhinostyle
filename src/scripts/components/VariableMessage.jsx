import cx    from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import { Message, Select } from '../components';

class VariableMessage extends React.Component {
  static displayName = 'RhinoVariableMessage';

  static propTypes = {
    className: React.PropTypes.string,
    composeLabel: React.PropTypes.string.isRequired,
    explanationMessage: React.PropTypes.string,
    previewLabel: React.PropTypes.string.isRequired,
    reset: React.PropTypes.bool,
    variables: React.PropTypes.array.isRequired,
    onInput: React.PropTypes.func,
    initialValue: React.PropTypes.string,
  };

  static defaultProps = {
    composeLabel: 'Message',
    previewLabel: 'Preview',
    explanationMessage: 'Select a variable to insert into the template',
  };

  state = {
    message: '',
    modified: false,
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({
        message: this.props.initialValue,
      });
    }
  }

  componentDidMount() {
    this.variableMessageUnique = Math.floor(Math.random() * 1000000);

    if (this.props.initialValue) {
      this.compose.textContent = this.props.initialValue;
      this.handleInitValue();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        message: nextProps.initialValue,
      });
    }
  }

  /**
   * Retrieves variables
   * Puts them in a flat-level array since some could be inside of `<optgroup>`s
   * @param  {array} array
   * @return {array}
   */
  getVariables = (array) => {
    let variables = array.filter(item => item.id !== -1);

    variables = variables.reduce((a, b) => a.concat(b.options || b), []);

    return variables;
  }

  /**
   * Update variable insertion point and cursor position
   * @param  {string} text
   * @return {void}
   */
  insertTextAtCursor = (text, paste = false) => {
    const sel = window.getSelection();
    let range = document.createRange();

    // Make sure we're focused on the compose element
    this.compose.focus();

    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      //range.insertNode($space);
      if (paste) {
        range.insertNode(document.createTextNode(text));
      } else {
        range.insertNode(text);
      }

      // Move caret
      range.setStartAfter(text);
      range.setEndAfter(text);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  /**
   * Transform `{}` into styled component
   * @param  {string} text
   * @return {node}
   */
  transformVar = (text) => {
    // Re-assign text value for processing
    let value = text;

    // Replace text contents of variable to hide squigglies
    const regexSquiggles = /{(.*)?}/g;
    value = value.replace(regexSquiggles, '<i>{</i>$1<i>}</i>');

    // Replace text contents of variable to hide underscore
    const regexUnderscores = /_/g;
    value = value.replace(regexUnderscores, '<b>_</b>');

    // Build variable UI
    const $variable = document.createElement('span');
    // Disable spell-checker
    $variable.setAttribute('spellcheck', false);
    // Do not allow the variable to be edited
    $variable.setAttribute('contenteditable', false);
    $variable.classList.add('variable-message__variable');
    $variable.innerHTML = value;

    const $close = document.createElement('span');
    $close.classList.add('variable-message__close');
    $variable.appendChild($close);

    return $variable;
  }

  /**
   * Insert variable in cursor position
   * @param  {string} text
   * @return {void}
   */
  insertVariable = (text) => {
    const $variable = this.transformVar(text);

    this.insertTextAtCursor($variable);

    // Manually trigger `input` update
    this.handleComposeInput();
  }

  handleInitValue = () => {
    const initialValue = this.props.initialValue;
    // Get flat-leve list of all variables
    const variables = this.getVariables(this.props.variables);

    // Split `initialValue` to target variables
    const split = initialValue.split(/({\w+})/g);

    // Loop through variables
    variables.forEach((value) => {
      const variable = value.variable;
      const foundVariable = split.indexOf(variable);

      // See if we've found one in our `initialValue`
      if (foundVariable !== -1) {
        // If so, transform the variable into HTML
        split[foundVariable] = this.transformVar(variable).outerHTML;
      }
    });

    // Set message content equal to new mixed content
    this.compose.innerHTML = split.join('');

    // Manually trigger `input` update
    this.handleComposeInput();
  }

  /**
   * Handle variable selection from `<Select>`
   * @param  {string} name  input[name]
   * @param  {string} value input[value]
   * @return {void}
   */
  handleVariableSelection = (name, value) => {
    // Get flat-leve list of all variables
    const variables = this.getVariables(this.props.variables);

    // Get variable context
    const variable = variables.find(el => el.id === value);

    // If we're on a valid variable
    if (variable.variable) {
      // Get variable value
      const variableContext = variable.variable;

      // Insert variable
      this.insertVariable(variableContext);

      // Reset position
      this.select.setState({
        selected: 0,
      });

      // Focus back on compose element
      this.compose.focus();
    }
  }

  /**
   * Disable `<enter>` within compose window
   * @param  {event} e
   * @return {void}
   */
  handleComposeKeypress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
    }
  }

  /**
   * IE11 does not support the `input` event on `contenteditable` elements, so blur is used instead to update
   * @return {void}
   */
  handleOnBlur = () => {
    // IE11 check
    if (!!window.MSInputMethodContext && !!document.documentMode) {
      this.handleComposeInput();
    }
  }

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
  }

  /**
   * Handle updating live-preview and variable swap
   * @return {void}
   */
  handleComposeInput = () => {
    const variables = this.props.variables;
    let reminderText = this.compose.textContent.trim();
    const $select = ReactDOM.findDOMNode(this.select);
    const $preview = ReactDOM.findDOMNode(this.preview);

    // Update state
    this.setState({
      message: reminderText,
    });

    // Search text to determine if variables are found in it
    this.getVariables(variables).forEach((value) => {
      const variable = value.variable;

      if (variable) {
        // We found the text
        if (reminderText.search(variable) !== -1) {
          // Disable option in select
          $select.querySelector(`[value="${value.id}"]`).setAttribute('disabled', 'disabled');

          // Swap out variables for data
          const regex = new RegExp(variable);
          reminderText = reminderText.replace(regex, value.variableValue);
        } else {
          // Enable option in select
          $select.querySelector(`[value="${value.id}"]`).removeAttribute('disabled');
        }
      }
    });

    // Take away any trailing space
    if (reminderText === ' ') {
      reminderText = '';
    }

    // Update preview
    $preview.innerHTML = reminderText;

    if (this.props.onInput && typeof (this.props.onInput === 'function')) {
      this.props.onInput(reminderText);
    }
  }

  /**
   * Clicking on a variable inside the compose window should remove it
   * @param  {event} e
   * @return {void}
   */
  handleVariableClick = (e) => {
    if (e.target.classList.contains('variable-message__close')) {
      const $parent = e.target.parentNode;

      // Remove variable
      $parent.parentElement.removeChild($parent);

      // Manually trigger `input` update
      this.handleComposeInput();
    }
  }

  /**
   * Determine if we should show reset option
   * Tests for both the reset prop and if the initialValue is not equal to the current message state
   * @return {boolean}
   */
  showReset = () => this.props.reset && this.props.initialValue && (this.props.initialValue !== this.state.message);

  render() {
    const { className, composeLabel, explanationMessage, previewLabel, variables } = this.props;
    const classes = cx('variable-message', className);

    const variableMessageInputName = `variable-message-input-${this.variableMessageUnique}`;
    const variableMessageSelectName = `variable-message-select-${this.variableMessageUnique}`;
    const variableMessagePreviewName = `variable-message-preview-${this.variableMessageUnique}`;

    return (
      <div className={classes} onClick={this.handleVariableClick}>
        <div className="variable-message__header">
          <label htmlFor={variableMessageInputName} className="u-block u-m-b-0">{composeLabel}</label>
          {this.showReset() ?
            <div className="variable-message__reset">
              <button className="button--reset u-text-muted u-text-small" onClick={this.handleInitValue}>Reset</button>
            </div> : null}
        </div>
        <div
          className="variable-message__compose"
          contentEditable
          onInput={this.handleComposeInput}
          onKeyPress={this.handleComposeKeypress}
          onBlur={this.handleOnBlur}
          onPaste={this.handlePaste}
          ref={ref => (this.compose = ref)}
        />
        <div className="variable-message__footer">
          <Select
            name={variableMessageSelectName}
            options={variables}
            onSelect={this.handleVariableSelection}
            ref={ref => (this.select = ref)}
          />
          {explanationMessage ? <div className="variable-message__explanation">{explanationMessage}</div> : null}
        </div>

        <hr className="u-m-y-large" />

        <label htmlFor={variableMessagePreviewName} className="u-block">{previewLabel}</label>
        <Message type="primary" direction="inbound" ref={ref => (this.preview = ref)} />
      </div>
    );
  }
}

export default VariableMessage;
