import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  static displayName = 'RhinoInput';

  static propTypes = {
    groupClass:  React.PropTypes.string,
    inputClass:  React.PropTypes.string,
    label:       React.PropTypes.string,
    labelClass:  React.PropTypes.string,
    name:        React.PropTypes.string,
    placeholder: React.PropTypes.string,
    size:        React.PropTypes.string,
    type:        React.PropTypes.oneOf(['email', 'password', 'text']),
    value:       React.PropTypes.any
  };

  static defaultProps = {
    label: '',
    name:  '',
    type:  'text'
  };

  getInputDOMNode() {
    return this.refs.input;
  }

  getValue() {
    return this.getInputDOMNode().value;
  }

  render() {
    const { groupClass, inputClass, label, labelClass, name, placeholder, size, type, value, ...props } = this.props;
    const cxGroup = classNames('form__group', groupClass);
    const cxLabel = classNames(labelClass);
    const cxInput = classNames('form__control', inputClass);

    const showLabel = () => {
      if (label) {
        return (<label htmlFor={name} className={cxLabel}>{label}</label>);
      }
    };

    return (
      <div className={cxGroup}>
        {showLabel()}
        <input {...props} value={value} type={type} className={cxInput} id={name} placeholder={placeholder} ref="input" />
      </div>
    );
  }
}

export default Input;
