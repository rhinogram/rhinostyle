import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Cleave from 'cleave.js/react';

import { Button, FormLabel, FormExplanationMessage, FormValidationMessage, Icon, UtilitySystem } from '.';

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
    this.checkFocus();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: nextProps.initialValue,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.focus !== this.props.focus) {
      if (!this.props.focus) {
        this.input.blur();
      } else {
        this.checkFocus();
      }
    }
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  checkFocus = () => {
    if (this.props.focus) this.input.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    if (this.props.onChange) {
      if (this.props.format) {
        this.props.onChange(event.target.name, event.target.rawValue.trimLeft(), event.target.value);
      } else {
        this.props.onChange(event.target.name, event.target.value.trimLeft());
      }
    }
  }

  handleKeyPress = (event) => {
    if (this.props.onKeyPress) {
      this.props.onKeyPress(event);
    }
  }

  handleClear = (event) => {
    if (this.props.onClear) {
      this.props.onClear(event);
    }

    this.setState({ value: '' }, () => this.input.focus());
  }

  handleFocus = () => {
    this.input.closest('.form__group').classList.add('has-focus');
  }

  handleBlur = () => {
    this.input.closest('.form__group').classList.remove('has-focus');
  }

  handleMouseDown = (event) => {
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }
  }

  render() {
    const {
      addon,
      autoCapitalize,
      autoComplete,
      className,
      clear,
      customHTMLAttributes,
      customInputClasses,
      disabled,
      explanationMessage,
      format,
      id,
      label,
      naked,
      name,
      onInit,
      placeholder,
      readOnly,
      required,
      size,
      type,
      validationMessage,
    } = this.props;

    const inputClasses = cx('form__control', customInputClasses, {
      'form__control--clear': clear,
      'form__control--naked': naked,
      'form__control--error': validationMessage,
      'form__control--large': size,
    });
    const formGroupClasses = cx('form__group', className);
    const addonClasses = cx('form__addon', {
      'form__addon--large': size,
      'has-error': validationMessage,
      form__clear: clear,
    });
    const inputWrapperClasses = cx('input__wrapper', {
      form__clear: clear,
    });

    const input = this.state.value;
    let inputMarkup = null;

    const inputRender = () => {
      if (format) {
        return (
          <div className={inputWrapperClasses}>
            <Cleave
              autoCapitalize={autoCapitalize}
              autoComplete={autoComplete}
              type={type}
              disabled={disabled}
              className={inputClasses}
              id={id || this.id} // If parent doesn't explicitly pass an ID, we will generate one dynamically. NOTE: ONLY Pass ID when absolutely necessary.
              name={name}
              onInit={onInit}
              options={format}
              placeholder={placeholder}
              value={this.state.value}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange}
              onMouseDown={this.handleMouseDown}
              readOnly={readOnly}
              htmlRef={ref => (this.input = ref)}
              {...customHTMLAttributes} // Note, only 'standard' custom attributes such as 'data-' or 'aria-' will be passed to the DOM
            />
            {input && clear && (
              <Button reset className="form__clear__button" onClick={this.handleClear}>
                <Icon icon="close" />
              </Button>
            )}
          </div>
        );
      }

      return (
        <div className={inputWrapperClasses}>
          <input
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            type={type}
            disabled={disabled}
            className={inputClasses}
            id={id || this.id} // If parent doesn't explicitly pass an ID, we will generate one dynamically. NOTE: ONLY Pass ID when absolutely necessary.
            name={name}
            placeholder={placeholder}
            value={this.state.value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            onMouseDown={this.handleMouseDown}
            readOnly={readOnly}
            ref={ref => (this.input = ref)}
            {...customHTMLAttributes} // Note, only 'standard' custom attributes such as 'data-' or 'aria-' will be passed to the DOM
          />
          {input && clear && (
          <Button reset className="form__clear__button" onClick={this.handleClear}>
            <Icon icon="close" />
          </Button>
          )}
        </div>
      );
    };

    const showInput = () => {
      switch (addon) {
        case 'left':
          inputMarkup = (
            <div className={addonClasses}>
              <div className="form__addon__item form__addon__item--left" disabled={disabled}>
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

      return inputMarkup;
    };

    return (
      <div className={formGroupClasses}>
        <FormLabel id={this.id} required={required}>{label}</FormLabel>
        {showInput()}
        <FormValidationMessage validationMessage={validationMessage} />
        <FormExplanationMessage explanationMessage={explanationMessage} />
      </div>
    );
  }
}

Input.propTypes = {
  addon: PropTypes.oneOf(['left', 'right', 'both']),
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoComplete: PropTypes.oneOf(['off', 'on']),
  children: PropTypes.node,
  className: PropTypes.string,
  clear: PropTypes.bool,
  customHTMLAttributes: PropTypes.object,
  customInputClasses: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  focus: PropTypes.bool,
  format: PropTypes.object,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  naked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onInit: PropTypes.func,
  onKeyPress: PropTypes.func,
  onClear: PropTypes.func,
  onMouseDown: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['large']),
  type: PropTypes.oneOf(['email', 'password', 'text', 'number', 'search', 'tel']),
  validationMessage: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
