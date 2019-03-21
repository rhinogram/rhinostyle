import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { UtilitySystem } from '.';

class SlidingRadio extends Component {
  state={
    selectedValue: this.props.selectedValue || '',
  }

  handleChange = (value) => {
    this.setState({ selectedValue: value });
  }

  getLabelColor = (value) => {
    const isChecked = value === this.state.selectedValue;
    let color;
    if (!isChecked) {
      color = 'u-text-muted';
    } else if (value === '1') {
      color = 'u-text-danger';
    } else if (value === '2') {
      color = 'u-text-warning';
    } else if (value === '3') {
      color = 'u-text-secondary';
    }

    return color;
  }


  render() {
    const { className, disabled, options } = this.props;
    const { selectedValue } = this.state;
    const classes = cx('rhinoslidingradio', className, {
      [UtilitySystem.config.classes.disabled]: disabled,
    });
    return (
      <div className={classes}>
        {options.map(({ value, name }) => (
          <div>
            <input className="rhinoslidingradio__input" type="radio" disabled={disabled} name={name} value={value} id={value} checked={value === selectedValue} onChange={() => this.handleChange(value)} />
            <label // eslint-disable-line jsx-a11y/label-has-for
              className={`rhinoslidingradio__label ${this.getLabelColor(value)}`}
              htmlFor={value}
            >
              {name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

SlidingRadio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
