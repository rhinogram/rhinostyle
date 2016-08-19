import React from 'react';
import cx    from 'classnames';

class Input extends React.Component {
  static displayName = 'RhinoInput';

  static propTypes = {
    addon:        React.PropTypes.oneOf(['', 'left', 'right', 'both']),
    className:    React.PropTypes.string,
    initialValue: React.PropTypes.any,
    label:        React.PropTypes.string,
    name:         React.PropTypes.string,
    placeholder:  React.PropTypes.string,
    required:     React.PropTypes.bool,
    type:         React.PropTypes.oneOf(['email', 'password', 'text']),
  };

  static defaultProps = {
    addon:    '',
    label:    '',
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
  }

  render() {
    const { addon, className, label, name, placeholder, required, type } = this.props;
    const inputClasses = cx('form__control');
    const formGroupClasses = cx('form__group', className);

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label} {required ? <span className="form__asterisk">*</span> : null}</label>;
      }

      return false;
    };

    const showInput = () => {
      switch (addon) {
        case 'left':
          return (
            <div className="form__addon">
              <div className="form__addon__item form__addon__item--left">
                {/* eslint react/prop-types:0 */}
                {this.props.children}
              </div>
              <input type={type} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />
            </div>
          );
        case 'right':
          return (
            <div className="form__addon">
              <input type={type} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />
              <div className="form__addon__item form__addon__item--right">
                {this.props.children}
              </div>
            </div>
          );
        case 'both':
          return (
            <div className="form__addon">
              <div className="form__addon__item form__addon__item--left">
                {this.props.children[0]}
              </div>
              <input type={type} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />
              <div className="form__addon__item form__addon__item--right">
                {this.props.children[1]}
              </div>
            </div>
          );
        case '':
        default:
          return <input type={type} className={inputClasses} id={name} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} />;
      }
    };

    return (
      <div className={formGroupClasses}>
        {showLabel()}
        {showInput()}
      </div>
    );
  }
}

export default Input;
