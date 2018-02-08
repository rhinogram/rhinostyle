import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../components';

const Radio = (props) => {
  const { children, className, disabled, label, name, onChange, selectedValue, value } = props;
  const id = `${name}-${UtilitySystem.generateUUID()}`;
  const classes = cx('rhinodio', className, {
    [UtilitySystem.config.classes.disabled]: disabled,
  });

  return (
    <div className={classes}>
      <input className="rhinodio__input" type="radio" disabled={disabled} name={name} value={value} id={id} checked={props.value === selectedValue} onChange={onChange} />
      {label && (
        <label // eslint-disable-line jsx-a11y/label-has-for
          className="rhinodio__label"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {((props.value === selectedValue) && children) &&
        <div className="form__block-group__meta">
          {children}
        </div>
      }
    </div>
  );
};

Radio.displayName = 'Rhinodio';

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Radio.defaultProps = {
  disabled: false,
  onChange() {
    return true;
  },
};

export default Radio;
