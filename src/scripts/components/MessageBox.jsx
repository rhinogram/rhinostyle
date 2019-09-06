import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Textarea from 'react-textarea-autosize';

import { FormLabel, UtilitySystem } from '.';

class MessageBox extends React.Component {
  state = {
    value: '',
  };

  componentDidMount() {
    if (this.props.focus && this.rhinoTextArea) {
      this.rhinoTextArea.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: nextProps.initialValue,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.focus !== this.props.focus) && this.props.focus) {
      this.rhinoTextArea.focus();
    }
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  handleChange = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.onInput) {
      this.props.onInput(event.target.name, event.target.value);
    }
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event.target.name, event.target.value);
    }
  }

  handleKeyPress = (event) => {
    if (this.props.onKeyPress) {
      this.props.onKeyPress(event);
    }
  }

  handleHeightChange = (height, instance) => {
    if (this.props.onHeightChange) {
      this.props.onHeightChange(height, instance);
    }
  }

  handleFocus = () => {
    const inboxThreadActive = this.props.messageBoxType ? document.getElementById(`convo__footer__scroll__${this.props.messageBoxType}`) : null;
    if (inboxThreadActive) {
      inboxThreadActive.scrollIntoView({ block: 'center' });
    }
  }

  render() {
    const { required, rows, className, disabled, label, naked, name, placeholder, maxHeight } = this.props;

    const textAreaClasses = cx('form__control u-overflow-y-auto', {
      'form__control--naked': naked,
    });
    const formGroupClasses = cx('form__group', className);
    const messageBoxStyle = { maxHeight };

    return (
      <div className={formGroupClasses}>
        <FormLabel id={this.id} required={required}>{label}</FormLabel>
        <Textarea
          name={name}
          id={this.id}
          rows={rows}
          placeholder={placeholder}
          className={textAreaClasses}
          style={messageBoxStyle}
          value={this.state.value}
          onKeyPress={this.handleKeyPress}
          onInput={this.handleChange}
          onClick={this.handleClick}
          onHeightChange={this.handleHeightChange}
          disabled={disabled}
          inputRef={ref => (this.rhinoTextArea = ref)}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}

MessageBox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onInput: PropTypes.func,
  onKeyPress: PropTypes.func,
  onHeightChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  maxHeight: PropTypes.string,
  naked: PropTypes.bool,
  initialValue: PropTypes.string,
  focus: PropTypes.bool,
  rows: PropTypes.number,
  messageBoxType: PropTypes.string,
};

MessageBox.defaultProps = {
  rows: 1,
  maxHeight: '20rem',
};

export default MessageBox;
