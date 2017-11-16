import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../components';

const Radio = (props) => {
  const { className, disabled, name, onChange, label, value } = props;
  const id = `${name}-${Math.floor(Math.random() * 1000000)}`;
  const classes = cx('rhinodio', className, {
    [UtilitySystem.config.classes.disabled]: disabled,
  });

  return (
    <div className={classes}>
      <input type="radio" disabled={disabled} name={name} value={value} id={id} checked={props.value === props.selectedValue} onChange={onChange} />
      <label htmlFor={id}>{props.label}</label>
      {props.value === props.selectedValue &&
        <div className="rhinodio__meta">
          {props.children}
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
