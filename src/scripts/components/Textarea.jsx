import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormLabel from './FormLabel';
import FormValidationMessage from './FormValidationMessage';
import FormExplanationMessage from './FormExplanationMessage';
import { UtilitySystem } from '../UtilitySystem';
import handleDeleteEmoji from '../helpers/handleDeleteEmoji';

class Textarea extends React.Component {
  state = {
    charactersLeft: '',
    value: '',
  };

  componentDidMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue.trimRight() });
    }

    if (this.props.maxCharacters && this.props.initialValue) {
      this.setState({ charactersLeft: this.props.maxCharacters - this.props.initialValue.length });
    } else if (this.props.maxCharacters) {
      this.setState({ charactersLeft: this.props.maxCharacters });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: this.props.initialValue,
        ...this.props.maxCharacters && {
          charactersLeft: this.props.maxCharacters - (this.props.initialValue?.length || 0),
        },
      });
    }
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      charactersLeft: this.props.maxCharacters - event.target.value.length,
    });

    if (this.props.onChange) {
      this.props.onChange(event.target.name, event.target.value.trimLeft());
    }
  }

  handleMouseDown = (event) => {
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }
  }

  handleKeyDown = (event) => {
    const { textareaRef, name, initialValue, onChange } = this.props;
    if (this.props.emojiSupport) {
      handleDeleteEmoji(event, textareaRef, name, initialValue, onChange);
    }
  }

  render() {
    const {
      abbrMaxCharacters,
      className,
      disabled,
      explanationMessage,
      label,
      maxCharacters,
      naked,
      name,
      placeholder,
      readOnly,
      required,
      rows,
      textareaRef,
      validationMessage,
    } = this.props;

    const textAreaClasses = cx('form__control', {
      'form__control--error': validationMessage,
      'form__control--naked': naked,
    });
    const formGroupClasses = cx('form__group', className);
    const characterCountClasses = cx('form__character-count', {
      'form__character-count--danger': this.state.charactersLeft < 11,
    });

    const showCharacterCount = () => {
      if (maxCharacters) {
        return (
          <div className={characterCountClasses}>
            {this.state.charactersLeft} {!abbrMaxCharacters && <span>character{(this.state.charactersLeft !== 1) ? 's' : ''} left</span>}
          </div>
        );
      }

      return false;
    };

    return (
      <div className={formGroupClasses}>
        <FormLabel id={this.id} required={required}>{label}</FormLabel>
        <textarea
          id={this.id}
          name={name}
          className={textAreaClasses}
          rows={rows}
          placeholder={placeholder}
          readOnly={readOnly}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onMouseDown={this.handleMouseDown}
          disabled={disabled}
          ref={textareaRef}
        />
        {(validationMessage || explanationMessage || showCharacterCount()) && (
          <div className="form__control-footer">
            {(validationMessage || explanationMessage) && (
            <div className="form__control-footer__left">
              <FormValidationMessage validationMessage={validationMessage} />
              <FormExplanationMessage explanationMessage={explanationMessage} />
            </div>
            )}
            {showCharacterCount()}
          </div>
        )}
      </div>
    );
  }
}

Textarea.propTypes = {
  abbrMaxCharacters: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  emojiSupport: PropTypes.bool,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  maxCharacters: PropTypes.number,
  naked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onMouseDown: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  textareaRef: PropTypes.object,
  validationMessage: PropTypes.string,
};

Textarea.defaultProps = {
  rows: 3,
};

export default Textarea;
