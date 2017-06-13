import cx    from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import { Message, Select, UtilitySystem } from '../components';

class VariableMessage extends React.Component {
  static displayName = 'RhinoVariableMessage';

  static propTypes = {
    className: React.PropTypes.string,
    composeLabel: React.PropTypes.string.isRequired,
    explanationMessage: React.PropTypes.string,
    previewLabel: React.PropTypes.string.isRequired,
    reset: React.PropTypes.bool,
    variables: React.PropTypes.array.isRequired,
  };

  static defaultProps = {
    composeLabel: 'Message',
    previewLabel: 'Preview',
    explanationMessage: 'Select a variable to insert into the template',
  };

  componentDidMount() {
    this.handleVariableClick();
  }

  /**
   * Update variable insertion point and cursor position
   * @param  {string} text
   * @return {void}
   */
  insertTextAtCursor = (text) => {
    const sel = window.getSelection();
    let range = document.createRange();

    // Make sure we're focused on the compose element
    this.compose.focus();

    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      //range.insertNode($space);
      range.insertNode(text);

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

    // Close element
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

  /**
   * Handle variable selection from `<Select>`
   * @param  {string} name  input[name]
   * @param  {string} value input[value]
   * @return {void}
   */
  handleVariableSelection = (name, value) => {
    const $select = ReactDOM.findDOMNode(this.select);
    // Get variable context
    const variable = this.props.variables.find(el => el.id === value);

    // If we're on a valid variable
    if (variable.variable) {
      // Get variable value
      const variableContext = variable.variable;

      // Insert variable
      this.insertVariable(variableContext);

      // Reset position
      $select.selectedIndex = null;

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
   * Handle updating live-preview and variable swap
   * @return {void}
   */
  handleComposeInput = () => {
    const variables = this.props.variables;
    let reminderText = this.compose.textContent.trim();
    const $select = ReactDOM.findDOMNode(this.select);
    const $preview = ReactDOM.findDOMNode(this.preview);

    // Search text to determine if variables are found in it
    UtilitySystem.forEach(variables, (index, value) => {
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
  }

  /**
   * Clicking on a variable inside the compose window should remove it
   * @param  {event} e
   * @return {void}
   */
  handleVariableClick = () => {
    document.querySelector('body').addEventListener('click', (e) => {
      if (e.target.classList.contains('variable-message__close')) {
        const $parent = e.target.parentNode;

        // Remove space `<span>`
        //if ($parent.nextSibling.classList.contains('reminder__space')) $parent.nextSibling.remove();
        // Remove variable
        $parent.remove();

        // Manually trigger `input` update
        this.handleComposeInput();
      }
    });
  }

  render() {
    const { className, composeLabel, reset, explanationMessage, previewLabel, variables } = this.props;
    const classes = cx('variable-message', className);

    const variableMessageUnique = Math.floor(Math.random() * 1000000);
    const variableMessageInputName = `variable-message-input-${variableMessageUnique}`;
    const variableMessageSelectName = `variable-message-select-${variableMessageUnique}`;
    const variableMessagePreviewName = `variable-message-preview-${variableMessageUnique}`;

    return (
      <div className={classes}>
        <div className="variable-message__header">
          <label htmlFor={variableMessageInputName} className="u-block u-m-b-0">{composeLabel}</label>
          {reset ? <button className="button--reset u-text-muted u-text-small">Reset</button> : null}
        </div>
        <div className="variable-message__compose" contentEditable onInput={this.handleComposeInput} onKeyPress={this.handleComposeKeypress} ref={ref => (this.compose = ref)} />
        <div className="variable-message__footer">
          <Select name={variableMessageSelectName} options={variables} onSelect={this.handleVariableSelection} ref={ref => (this.select = ref)} />
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
