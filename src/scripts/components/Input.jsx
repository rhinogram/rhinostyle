import React from 'react';
import cx    from 'classnames';

class Input extends React.Component {
  static displayName = 'RhinoInput';

  static propTypes = {
    addonLeft:   React.PropTypes.string,
    addonRight:  React.PropTypes.string,
    label:       React.PropTypes.string,
    name:        React.PropTypes.string,
    placeholder: React.PropTypes.string,
    type:        React.PropTypes.oneOf(['email', 'password', 'text']),
    value:       React.PropTypes.any,
  };

  static defaultProps = {
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
    const { label, name, placeholder, type, value } = this.props;
    const classes = cx('form__control');

    const showLabel = () => {
      if (label) {
        return (<label htmlFor={name}>{label}</label>);
      }
      return false;
    };

    return (
      <div className="form__group">
        {showLabel()}
        <input value={value} type={type} className={classes} id={name} placeholder={placeholder} ref="input" />
      </div>
    );
  }
}

export default Input;
