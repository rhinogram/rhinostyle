import React from 'react';
import cx    from 'classnames';

class Select extends React.Component {
  static displayName = 'RhinoSelect';

  static propTypes = {
    className:    React.PropTypes.string,
    disabled:     React.PropTypes.bool,
    label:        React.PropTypes.string,
    name:         React.PropTypes.string,
    options:      React.PropTypes.arrayOf(React.PropTypes.shape({ value: React.PropTypes.string.isRequired, text: React.PropTypes.string.isRequired, selected: React.PropTypes.bool })).isRequired,
    required:     React.PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    label:    '',
    name:     '',
    required: false,
  };

  state = {
    selected: '',
  }

  componentWillMount() {
    this.props.options.forEach((option) => {
      if (option.selected) {
        this.setState({
          selected: option.value,
        });
      }
    });
  }

  _onChange = (event) => {
    this.setState({
      selected: event.target.value,
    });
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

    const renderOpts = option => <option key={option.value} value={option.value}>{option.text}</option>;

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
