import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '.';

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

  toggleChecked = (event) => {
    if (this.props.onClick) {
      this.props.onClick(!this.state.checked, event);
    }

    if (this.props.onChange) {
      this.props.onChange(this.props.name, !this.state.checked);
    }

    this.setState({
      checked: !this.state.checked,
    });
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.checkboxLabel.click();
    }
  }

  render() {
    const { children, className, label, disabled, name, title, value, type } = this.props;
    const { checked } = this.state;

    const classes = cx('rhinobox', `rhinobox--${type}`, className, {
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
          onClick={this.toggleChecked}
          onKeyUp={this.handleKeyUp}
          title={title}
        />
        {label && (
          <label // eslint-disable-line jsx-a11y/label-has-for
            className="rhinobox__label"
            htmlFor={this.id}
            ref={(checkboxLabel) => { this.checkboxLabel = checkboxLabel; }}
          >
            {label}
          </label>
        )}
        {((checked) && children) && (
          <div className="form__block-group__meta">
            {children}
          </div>
        )}
      </div>
    );
  }
}

Checkbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.oneOf('primary', 'secondary'),
};

Checkbox.defaultProps = {
  isChecked: false,
  type: 'primary',
};

export default Checkbox;
