import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import FormLabel from './FormLabel';
import { UtilitySystem } from '../UtilitySystem';

class SlidingRadio extends Component {
  state = {
    selectedValue: this.props.selectedValue || '',
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.selectedValue !== this.props.selectedValue) {
      this.setState({ selectedValue: this.props.selectedValue });
    }
  };

  handleChange = (value) => {
    this.setState({ selectedValue: value });
    if (this.props.onChange) this.props.onChange(value);
  };

  getLabelStyle = ({ value, type }) => {
    const isChecked = value === this.state.selectedValue;

    let style;
    if (!isChecked) {
      style = 'u-font-weight-normal';
    } else if (type === 'danger') {
      style = 'u-text-danger';
    } else if (type === 'warning') {
      style = 'u-text-warning';
    } else if (type === 'secondary') {
      style = 'u-text-secondary';
    }

    return style;
  };

  render() {
    const { disabled, options, className, label, required, name } = this.props;
    const { selectedValue } = this.state;
    const classes = cx('rhinoslidingradio', {
      [UtilitySystem.config.classes.disabled]: disabled,
    });
    return (
      <div className="form__group">
        <FormLabel id="" required={required}>
          {label}
        </FormLabel>
        <div className={classes}>
          {options.map((option) => (
            <div key={option.value} className={className}>
              <input
                className="rhinoslidingradio__input"
                type="radio"
                disabled={disabled}
                name={name}
                value={option.value}
                id={name + option.value}
                checked={option.value === selectedValue}
                onChange={() => this.handleChange(option.value)}
              />
              <label // eslint-disable-line jsx-a11y/label-has-for
                className={`rhinoslidingradio__label ${this.getLabelStyle(option)}`}
                htmlFor={name + option.value}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

SlidingRadio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array.isRequired,
};

SlidingRadio.defaultProps = {
  disabled: false,
  onChange() {
    return true;
  },
};

export default SlidingRadio;
