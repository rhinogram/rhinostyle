import cx from 'classnames';
import React from 'react';

import { Icon } from '../components';

class Input extends React.Component {
  static displayName = 'RhinoInput';

  static propTypes = {
    addon: React.PropTypes.oneOf(['', 'left', 'right', 'both']),
    autoCapitalize: React.PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
    autoComplete: React.PropTypes.oneOf(['off', 'on']),
    className: React.PropTypes.string,
    clear: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    explanationMessage: React.PropTypes.string,
    initialValue: React.PropTypes.string,
    label: React.PropTypes.string,
    naked: React.PropTypes.bool,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    onClear: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    focus: React.PropTypes.bool,
    type: React.PropTypes.oneOf(['email', 'password', 'text', 'number', 'search', 'tel']),
    validationMessage: React.PropTypes.string,
  };

  static defaultProps = {
    addon: '',
    clear: false,
    disabled: false,
    label: '',
    naked: false,
    name: '',
    required: false,
    type: 'text',
    focus: false,
  };

  state = {
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue.trimRight() });
    }
  }

  componentDidMount() {
    if (this.props.focus && this.rhinoInput) {
      this.rhinoInput.focus();
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
      this.rhinoInput.focus();
    }
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });

    if (this.props.onChange && typeof (this.props.onChange === 'function')) {
      this.props.onChange(event.target.id, event.target.value.trimLeft());
    }
  }

  _handleKeyPress = (event) => {
    if (this.props.onKeyPress && typeof (this.props.onKeyPress === 'function')) {
      this.props.onKeyPress(event);
    }
  }

  _handleClear = (event) => {
    if (this.props.onClear && typeof (this.props.onClear === 'function')) {
      this.props.onClear(event);
    }

    this.setState({ value: '' });
    this.rhinoInput.focus();
  }

  render() {
    const { addon, autoCapitalize, autoComplete, className, clear, disabled, explanationMessage, label, naked, name, placeholder, required, type, validationMessage } = this.props;
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

    const showExplanationMessage = () => {
      if (explanationMessage) {
        return <div className="form__explanation-message">{explanationMessage}</div>;
      }

      return false;
    };

    const input = this.state.value;

    let inputMarkup = null;

    const showInput = () => {
      if (clear) {
        inputMarkup = (
          <div className="form__clear">
            <input autoCapitalize={autoCapitalize} autoComplete={autoComplete} type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onKeyPress={this._handleKeyPress} onChange={this._handleChange} ref={ref => (this.rhinoInput = ref)} />
            {input ? <button type="button" className="button--reset form__clear__button" onClick={this._handleClear} ><Icon icon="close" /></button> : null}
          </div>
        );
      } else {
        switch (addon) {
          case 'left':
            inputMarkup = (
              <div className="form__addon">
                <div className="form__addon__item form__addon__item--left" disabled={disabled}>
                  {/* eslint react/prop-types:0 */}
                  {this.props.children}
                </div>
                <input autoCapitalize={autoCapitalize} autoComplete={autoComplete} type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onKeyPress={this._handleKeyPress} onChange={this._handleChange} ref={ref => (this.rhinoInput = ref)} />
              </div>
            );
            break;
          case 'right':
            inputMarkup = (
              <div className="form__addon">
                <input autoCapitalize={autoCapitalize} autoComplete={autoComplete} type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onKeyPress={this._handleKeyPress} onChange={this._handleChange} ref={ref => (this.rhinoInput = ref)} />
                <div className="form__addon__item form__addon__item--right" disabled={disabled}>
                  {this.props.children}
                </div>
              </div>
            );
            break;
          case 'both':
            inputMarkup = (
              <div className="form__addon">
                <div className="form__addon__item form__addon__item--left" disabled={disabled}>
                  {this.props.children[0]}
                </div>
                <input autoCapitalize={autoCapitalize} autoComplete={autoComplete} type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onKeyPress={this._handleKeyPress} onChange={this._handleChange} ref={ref => (this.rhinoInput = ref)} />
                <div className="form__addon__item form__addon__item--right" disabled={disabled}>
                  {this.props.children[1]}
                </div>
              </div>
            );
            break;
          default:
            inputMarkup = <input autoCapitalize={autoCapitalize} autoComplete={autoComplete} type={type} disabled={disabled} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onKeyPress={this._handleKeyPress} onChange={this._handleChange} ref={ref => (this.rhinoInput = ref)} />;
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

export default Input;
