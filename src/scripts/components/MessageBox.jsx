import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Textarea from 'react-textarea-autosize';

import FormLabel from './FormLabel';
import { UtilitySystem } from '../UtilitySystem';
import handleDeleteEmoji from '../helpers/handleDeleteEmoji';

class MessageBox extends React.Component {
  state = {
    value: '',
  };

  componentDidMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue });
    }
    if (this.props.focus) {
      if (this.rhinoTextArea) {
        this.rhinoTextArea.focus();
      } else if (this.props.messageBoxRef) {
        this.props.messageBoxRef.current.focus();
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: this.props.initialValue,
      });
    }
    if (prevProps.focus !== this.props.focus && this.props.focus) {
      if (this.props.messageBoxRef) {
        this.props.messageBoxRef.current.focus();
      } else {
        this.rhinoTextArea.focus();
      }
    }
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  handleChange = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.onInput) {
      this.props.onInput(event.target.name, event.target.value);
    }
  };

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event.target.name, event.target.value);
    }
  };

  handleKeyPress = (event) => {
    if (this.props.onKeyPress) {
      this.props.onKeyPress(event);
    }
  };

  handleKeyDown = (event) => {
    const { messageBoxRef, name, initialValue, onInput, emojisupport } = this.props;
    if (emojisupport) {
      handleDeleteEmoji(event, messageBoxRef, name, initialValue, onInput);
    }
  }

  handleHeightChange = (height, instance) => {
    if (this.props.onHeightChange) {
      this.props.onHeightChange(height, instance);
    }
  };

  handleFocus = () => {
    if (this.props.handleFocus) {
      this.props.handleFocus();
    }
  };

  render() {
    const {
      required,
      rows,
      className,
      disabled,
      label,
      naked,
      name,
      placeholder,
      maxHeight,
      messageBoxRef,
    } = this.props;

    const textAreaClasses = cx('form__control u-overflow-y-auto', {
      'form__control--naked': naked,
    });
    const formGroupClasses = cx('form__group', className);
    const messageBoxStyle = { maxHeight };

    return (
      <div className={formGroupClasses}>
        <FormLabel id={this.id} required={required}>
          {label}
        </FormLabel>
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
          inputRef={messageBoxRef || ((ref) => (this.rhinoTextArea = ref))}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

MessageBox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  emojisupport: PropTypes.bool,
  focus: PropTypes.bool,
  handleFocus: PropTypes.func,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  maxHeight: PropTypes.string,
  messageBoxRef: PropTypes.object,
  naked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onHeightChange: PropTypes.func,
  onInput: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

MessageBox.defaultProps = {
  rows: 1,
  maxHeight: '20rem',
};

export default MessageBox;
