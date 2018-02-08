import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../components';

class Checkbox extends React.Component {
  state = {
    checked: this.props.isChecked,
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isChecked !== this.props.isChecked) {
      this.setState({
        checked: newProps.isChecked,
      });
    }
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  _toggleChecked = () => {
    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick(!this.state.checked);
    }

    if (this.props.onChange && typeof (this.props.onChange === 'function')) {
      this.props.onChange(this.props.name, !this.state.checked);
    }

    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { children, className, label, disabled, name, value } = this.props;
    const { checked } = this.state;

    const classes = cx('rhinobox', className, {
      [UtilitySystem.config.classes.disabled]: disabled,
    });

    return (
      <div className={classes}>
        <input
          value={value}
          className="rhinobox__input"
          type="checkbox"
          disabled={disabled}
          name={name}
          id={this.id}
          checked={checked}
          onChange={this._toggleChecked}
        />
        {label &&
          <label // eslint-disable-line jsx-a11y/label-has-for
            className="rhinobox__label"
            htmlFor={this.id}
          >
            {label}
          </label>
        }
        {((checked) && children) &&
          <div className="form__block-group__meta">
            {children}
          </div>
        }
      </div>
    );
  }
}

Checkbox.displayName = 'Rhinobox';

Checkbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  isChecked: false,
  onClick() {
    return true;
  },
};

export default Checkbox;
