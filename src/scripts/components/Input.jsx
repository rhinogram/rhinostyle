import React from 'react';
import cx    from 'classnames';

class Input extends React.Component {
  static displayName = 'RhinoInput';

  static propTypes = {
    addon:       React.PropTypes.oneOf(['', 'left', 'right', 'both']),
    label:       React.PropTypes.string,
    name:        React.PropTypes.string,
    placeholder: React.PropTypes.string,
    type:        React.PropTypes.oneOf(['email', 'password', 'text']),
    value:       React.PropTypes.any,
  };

  static defaultProps = {
    addon: '',
    label: '',
    name:  '',
    type:  'text',
  };

  getInputDOMNode() {
    return this.refs.input;
  }

  getValue() {
    return this.getInputDOMNode().value;
  }

  render() {
    const { addon, label, name, placeholder, type, value } = this.props;
    const classes = cx('form__control');

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label}</label>;
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
              <input value={value} type={type} className={classes} id={name} placeholder={placeholder} ref="input" />
            </div>
          );
        case 'right':
          return (
            <div className="form__addon">
              <input value={value} type={type} className={classes} id={name} placeholder={placeholder} ref="input" />
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
              <input value={value} type={type} className={classes} id={name} placeholder={placeholder} ref="input" />
              <div className="form__addon__item form__addon__item--right">
                {this.props.children[1]}
              </div>
            </div>
          );
        case '':
        default:
          return <input value={value} type={type} className={classes} id={name} placeholder={placeholder} ref="input" />;
      }
    };

    return (
      <div className="form__group">
        {showLabel()}
        {showInput()}
      </div>
    );
  }
}

export default Input;
