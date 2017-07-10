import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../components';

const Radio = (props) => {
  const { className, disabled, name, onChange, value } = props;
  const id = `${name}-${Math.floor(Math.random() * 1000000)}`;
  const classes = cx('rhinodio', className, {
    [UtilitySystem.config.classes.disabled]: disabled,
  });

  return (
    <div className={classes}>
      <input type="radio" disabled={disabled} name={name} value={value} id={id} checked={props.value === props.selectedValue} onChange={onChange} />
      <label htmlFor={id}>
        {props.children}
      </label>
    </div>
  );
};

Radio.displayName = 'Rhinodio';

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
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
