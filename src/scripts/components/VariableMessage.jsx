import cx    from 'classnames';
import React from 'react';

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
  };

  static defaultProps = {
    composeLabel: 'Message',
    previewLabel: 'Preview',
    explanationMessage: 'Select a variable to insert into the template',
  };

  componentDidMount() {
    console.log(this.compose);
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
    $variable.classList.add('reminder__variable');
    $variable.innerHTML = value;

    const $close = document.createElement('span');
    $close.classList.add('reminder__close');
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

    // Fire off `input` event for browsers to listen to
    // @TODO Check IE support
    const event = new Event('input');
    this.compose.dispatchEvent(event);
  }

  /**
   * Handle variable selection from `<Select>`
   * @param  {event} e
   * @return {void}
   */
  handleVariableSelection = (e) => {
    // Get variable value
    const value = e.target.value;

    this.insertVariable(value);

    // Reset position
    e.target.selectedIndex = 0;

    // Focus back on compose element
    this.compose.focus();
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
        <div className="variable-message__compose" contentEditable ref={compose => (this.compose = compose)} />
        <div className="variable-message__footer">
          <Select name={variableMessageSelectName} options={variables} />
          {explanationMessage ? <div className="variable-message__explanation">{explanationMessage}</div> : null}
        </div>

        <hr className="u-m-y-large" />

        <label htmlFor={variableMessagePreviewName} className="u-block">{previewLabel}</label>
        <Message type="primary" direction="inbound" ref={preview => (this.preview = preview)} />
      </div>
    );
  }
}

export default VariableMessage;
