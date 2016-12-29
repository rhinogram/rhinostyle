import React from 'react';
import cx    from 'classnames';

class Select extends React.Component {
  static displayName = 'RhinoSelect';

  static propTypes = {
    className: React.PropTypes.string,
    disabled:  React.PropTypes.bool,
    label:     React.PropTypes.string,
    name:      React.PropTypes.string,
    options:   React.PropTypes.isRequired,
    onSelect:  React.PropTypes.func,
    required:  React.PropTypes.bool,
    selected:  React.PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    label:    '',
    name:     '',
    required: false,
    selected: '',
  };

  state = {
    selected: this.props.selected ? this.props.selected : '',
  }

  _onChange = (event) => {
    this.setState({
      selected: event.target.value,
    });

    if (this.props.onSelect && typeof this.props.onSelect === 'function') {
      this.props.onSelect(event.target.id, event.target.value);
    }
  }

  render() {
    const { className, disabled, label, name, options, required } = this.props;
    const classes = cx('rhinoselect__select', 'form__control', 'form__control--chevron');
    const formGroupClasses = cx('form__group', className);

    const showLabel = () => {
      if (label) {
        return <label htmlFor={name}>{label} {required ? <span className="form__asterisk">*</span> : null}</label>;
      }

      return false;
    };

    const renderOpts = option => <option key={option.id} value={option.value}>{option.value}</option>;

    return (
      <div className={formGroupClasses}>
        {showLabel()}
        <div className="rhinoselect">
          <select className={classes} disabled={disabled} id={name} value={this.state.selected} onChange={this._onChange}>
            {options.map(renderOpts)}
          </select>
        </div>
      </div>
    );
  }
}

export default Select;
