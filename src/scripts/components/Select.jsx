import cx    from 'classnames';
import React from 'react';

class Select extends React.Component {
  static displayName = 'RhinoSelect';

  static propTypes = {
    className:          React.PropTypes.string,
    disabled:           React.PropTypes.bool,
    explanationMessage: React.PropTypes.string,
    label:              React.PropTypes.string,
    name:               React.PropTypes.string,
    options:            React.PropTypes.array.isRequired,
    onSelect:           React.PropTypes.func,
    required:           React.PropTypes.bool,
    selected:           React.PropTypes.number,
    validationMessage:  React.PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    label:    '',
    name:     '',
    required: false,
    selected: -1,
  };

  state = {
    selected: this.props.selected ? this.props.selected : -1,
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selected !== this.props.selected) {
      this.setState({
        selected: newProps.selected,
      });
    }
  }

  _onChange = (event) => {
    const selected = typeof event.target.value !== 'number' ? JSON.parse(event.target.value) : event.target.value;

    this.setState({
      selected,
    });

    if (this.props.onSelect && typeof this.props.onSelect === 'function') {
      this.props.onSelect(event.target.id, selected);
    }
  }

  render() {
    const { className, disabled, explanationMessage, label, name, options, required, validationMessage } = this.props;

    const classes = cx('rhinoselect__select', 'form__control', 'form__control--chevron', {
      'form__control--error': validationMessage,
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

    const renderOpts = option => <option key={option.id} value={option.id}>{option.value}</option>;

    return (
      <div className={formGroupClasses}>
        {showLabel()}
        <div className="rhinoselect">
          <select className={classes} disabled={disabled} id={name} value={this.state.selected} onChange={this._onChange}>
            {options.map(renderOpts)}
          </select>
        </div>
        {showValidationMessage()}
        {showExplanationMessage()}
      </div>
    );
  }
}

export default Select;
