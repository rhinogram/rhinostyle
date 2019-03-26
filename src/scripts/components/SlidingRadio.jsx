import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { UtilitySystem, FormLabel } from '.';

class SlidingRadio extends Component {
  state={
    selectedValue: this.props.selectedValue || '',
  }

  handleChange = (value) => {
    this.setState({ selectedValue: value });
    if (this.props.onChange) this.props.onChange(value);
  }

  getLabelStyle = (value) => {
    const isChecked = value === this.state.selectedValue;
    const { options } = this.props;

    let style;
    if (!isChecked) {
      style = 'u-font-weight-normal';
    } else if (value === options[0].value) {
      style = 'u-text-danger';
    } else if (value === options[1].value) {
      style = 'u-text-warning';
    } else if (value === options[2].value) {
      style = 'u-text-secondary';
    }

    return style;
  }


  render() {
    const { slidingRadioContainerClass, disabled, options, slidingRadioClass, label, required, name } = this.props;
    const { selectedValue } = this.state;
    const classes = cx('rhinoslidingradio', {
      [UtilitySystem.config.classes.disabled]: disabled,
    }, slidingRadioContainerClass);
    return (
      <div className="form__group">
        <FormLabel id="" required={required}>{label}</FormLabel>
        <div className={classes}>
          {options.map(option => (
            <div key={option.value} className={slidingRadioClass}>
              <input
                className="rhinoslidingradio__input"
                type="radio"
                disabled={disabled}
                name={name}
                value={option.value}
                id={option.value}
                checked={option.value === selectedValue}
                onChange={() => this.handleChange(option.value)}
              />
              <label // eslint-disable-line jsx-a11y/label-has-for
                className={`rhinoslidingradio__label ${this.getLabelStyle(option.value)}`}
                htmlFor={option.value}
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
  slidingRadioContainerClass: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  slidingRadioClass: PropTypes.string,
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
