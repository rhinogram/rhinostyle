/* eslint no-return-assign:0 */

import React from 'react';
import cx    from 'classnames';
import { Close } from '../components';

class Input extends React.Component {
  static displayName = 'RhinoInput';

  static propTypes = {
    addon:              React.PropTypes.oneOf(['', 'left', 'right', 'both']),
    className:          React.PropTypes.string,
    clear:              React.PropTypes.bool,
    disabled:           React.PropTypes.bool,
    initialValue:       React.PropTypes.any,
    label:              React.PropTypes.string,
    naked:              React.PropTypes.bool,
    name:               React.PropTypes.string,
    onChange:           React.PropTypes.func,
    placeholder:        React.PropTypes.string,
    required:           React.PropTypes.bool,
    type:               React.PropTypes.oneOf(['email', 'password', 'text', 'number', 'search']),
    validationMessage:  React.PropTypes.string,
  };

  static defaultProps = {
    addon:    '',
    clear:    false,
    disabled: false,
    label:    '',
    naked:    false,
    name:     '',
    required: false,
    type:     'text',
  };

  state = {
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue });
    }
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.onChange && typeof(this.props.onChange === 'function')) {
      this.props.onChange(event);
    }
  }

  _handleClear = () => {
    this.setState({ value: '' });
    this.clearInput.focus();
  }

  render() {
    const { addon, className, clear, disabled, label, naked, name, placeholder, required, type, validationMessage } = this.props;
    const inputClasses = cx('form__control', {
      'form__control--clear':  clear,
      'form__control--naked':  naked,
      'form__control--error':  validationMessage,
    });
    const formGroupClasses = cx('form__group', className);

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label} {required ? <span className="form__asterisk">*</span> : null}</label>;
      }

      return false;
    };

    const showValidationMessage = () => {
      if (validationMessage) {
        return <div className="form__validation-message">{validationMessage}</div>;
      }

      return false;
    };

    const input = this.state.value;

    let inputMarkup = null;

    const showInput = () => {
      if (clear) {
        inputMarkup = (
          <div className="form__clear">
            <input type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} ref={(ref) => this.clearInput = ref} />
            {input ? <Close className="form__clear__btn" onClick={this._handleClear} /> : null}
          </div>
        );
      } else {
        switch (addon) {
          case 'left':
            inputMarkup = (
              <div className="form__addon">
                <div className="form__addon__item form__addon__item--left">
                  {/* eslint react/prop-types:0 */}
                  {this.props.children}
                </div>
                <input type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />
              </div>
            );
            break;
          case 'right':
            inputMarkup = (
              <div className="form__addon">
                <input type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />
                <div className="form__addon__item form__addon__item--right">
                  {this.props.children}
                </div>
              </div>
            );
            break;
          case 'both':
            inputMarkup = (
              <div className="form__addon">
                <div className="form__addon__item form__addon__item--left">
                  {this.props.children[0]}
                </div>
                <input type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />
                <div className="form__addon__item form__addon__item--right">
                  {this.props.children[1]}
                </div>
              </div>
            );
            break;
          default:
            inputMarkup = <input type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />;
        }
      }
      return inputMarkup;
    };

    return (
      <div className={formGroupClasses}>
        {showLabel()}
        {showInput()}
        {showValidationMessage()}
      </div>
    );
  }
}

export default Input;
