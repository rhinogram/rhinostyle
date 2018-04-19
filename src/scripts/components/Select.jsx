import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FormLabel, FormExplanationMessage, FormValidationMessage, UtilitySystem } from '../components';

class Select extends React.Component {
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

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  _onChange = (event) => {
    const selected = parseInt(event.target.value, 10) ? parseInt(event.target.value, 10) : event.target.value;

    this.setState({
      selected,
    });

    if (this.props.onSelect && typeof this.props.onSelect === 'function') {
      this.props.onSelect(event.target.name, selected);
    }
  }

  render() {
    const { className, disabled, explanationMessage, label, name, options, required, validationMessage } = this.props;

    const classes = cx('rhinoselect__select', 'form__control', 'form__control--chevron', {
      'form__control--error': validationMessage,
      [UtilitySystem.config.classes.disabled]: disabled,
    });

    const formGroupClasses = cx('form__group', className);

    const renderOpts = (option) => {
      // If the option has options as well we're in an `<optgroup>`
      if (option.options) {
        return (
          <optgroup key={option.id} label={option.value}>
            {option.options.map(childOption => <option key={childOption.id} value={childOption.id}>{childOption.value}</option>)}
          </optgroup>
        );
      }

      // We're in a default single-level `<option>`
      return (
        <option key={option.id} value={option.id}>{option.value}</option>
      );
    };

    return (
      <div className={formGroupClasses}>
        <FormLabel label={label} id={this.id} required={required} />
        <div className="rhinoselect">
          <select className={classes} disabled={disabled} id={this.id} name={name} value={this.state.selected} onChange={this._onChange}>
            {options.map(renderOpts)}
          </select>
        </div>
        <FormValidationMessage validationMessage={validationMessage} />
        <FormExplanationMessage explanationMessage={explanationMessage} />
      </div>
    );
  }
}

Select.displayName = 'RhinoSelect';

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  required: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
};

Select.defaultProps = {
  disabled: false,
  required: false,
  selected: -1,
};


export default Select;
