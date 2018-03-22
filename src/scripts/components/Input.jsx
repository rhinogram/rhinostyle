import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Cleave from 'cleave.js/react';

import { Button, Icon, UtilitySystem } from '../components';

class Input extends React.Component {
  state = {
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue.trimRight() });
    }
  }

  componentDidMount() {
    if (this.props.focus && this.input) {
      this.input.focus();
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
      this.input.focus();
    }
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  _handleChange = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.onChange) {
      if (this.props.format) {
        this.props.onChange(event.target.name, event.target.rawValue.trimLeft(), event.target.value);
      } else {
        this.props.onChange(event.target.name, event.target.value.trimLeft());
      }
    }
  }

  _handleKeyPress = (event) => {
    if (this.props.onKeyPress) {
      this.props.onKeyPress(event);
    }
  }

  _handleClear = (event) => {
    if (this.props.onClear) {
      this.props.onClear(event);
    }

    this.setState({ value: '' });
    this.input.focus();
  }

  _handleFocus = () => {
    this.input.closest('.form__group').classList.add('has-focus');
  }

  _handleBlur = () => {
    this.input.closest('.form__group').classList.remove('has-focus');
  }

  render() {
    const { addon, autoCapitalize, autoComplete, className, clear, disabled, explanationMessage, format, label, naked, name, placeholder, required, size, type, validationMessage } = this.props;
    const inputClasses = cx('form__control', {
      'form__control--clear':  clear,
      'form__control--naked':  naked,
      'form__control--error':  validationMessage,
      'form__control--large': size,
    });
    const formGroupClasses = cx('form__group', className);
    const addonClasses = cx('form__addon', {
      'form__addon--large': size,
      'has-error': validationMessage,
    });

    const showLabel = () => {
      if (label) {
        return (
          <label // eslint-disable-line jsx-a11y/label-has-for
            htmlFor={this.id}
          >
            {label} {required && <span className="form__asterisk">*</span>}
          </label>
        );
      }

      return false;
    };

    const showValidationMessage = () => {
      if (validationMessage) {
        return <div className="form__validation-message">{validationMessage}</div>;
      }

      return false;
    };

    const showExplanationMessage = () => {
      if (explanationMessage) {
        return <div className="form__explanation-message">{explanationMessage}</div>;
      }

      return false;
    };

    const input = this.state.value;
    let inputMarkup = null;

    const inputRender = () => {
      if (format) {
        return (
          <Cleave
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            type={type}
            disabled={disabled}
            className={inputClasses}
            id={this.id}
            name={name}
            options={format}
            placeholder={placeholder}
            value={this.state.value}
            onFocus={this._handleFocus}
            onBlur={this._handleBlur}
            onKeyPress={this._handleKeyPress}
            onChange={this._handleChange}
            htmlRef={ref => (this.input = ref)}
          />
        );
      }

      return (
        <input
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          type={type}
          disabled={disabled}
          className={inputClasses}
          id={this.id}
          name={name}
          placeholder={placeholder}
          value={this.state.value}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onKeyPress={this._handleKeyPress}
          onChange={this._handleChange}
          ref={ref => (this.input = ref)}
        />
      );
    };

    const showInput = () => {
      if (clear) {
        inputMarkup = (
          <div className="form__clear">
            {inputRender()}
            {input ?
              <Button reset className="form__clear__button" onClick={this._handleClear} >
                <Icon icon="close" />
              </Button>
              : null
            }
          </div>
        );
      } else {
        switch (addon) {
          case 'left':
            inputMarkup = (
              <div className={addonClasses}>
                <div className="form__addon__item form__addon__item--left" disabled={disabled}>
                  {/* eslint react/prop-types:0 */}
                  {this.props.children}
                </div>
                {inputRender()}
              </div>
            );
            break;
          case 'right':
            inputMarkup = (
              <div className={addonClasses}>
                {inputRender()}
                <div className="form__addon__item form__addon__item--right" disabled={disabled}>
                  {this.props.children}
                </div>
              </div>
            );
            break;
          case 'both':
            inputMarkup = (
              <div className={addonClasses}>
                <div className="form__addon__item form__addon__item--left" disabled={disabled}>
                  {this.props.children[0]}
                </div>
                {inputRender()}
                <div className="form__addon__item form__addon__item--right" disabled={disabled}>
                  {this.props.children[1]}
                </div>
              </div>
            );
            break;
          default:
            inputMarkup = (
              inputRender()
            );
        }
      }

      return inputMarkup;
    };

    return (
      <div className={formGroupClasses}>
        {showLabel()}
        {showInput()}
        {showValidationMessage()}
        {showExplanationMessage()}
      </div>
    );
  }
}

Input.displayName = 'RhinoInput';

Input.propTypes = {
  addon: PropTypes.oneOf(['', 'left', 'right', 'both']),
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoComplete: PropTypes.oneOf(['off', 'on']),
  className: PropTypes.string,
  clear: PropTypes.bool,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  format: PropTypes.object,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['large']),
  naked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  focus: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'password', 'text', 'number', 'search', 'tel']),
  validationMessage: PropTypes.string,
};

Input.defaultProps = {
  addon: '',
  clear: false,
  disabled: false,
  label: '',
  naked: false,
  required: false,
  type: 'text',
  focus: false,
};

export default Input;
