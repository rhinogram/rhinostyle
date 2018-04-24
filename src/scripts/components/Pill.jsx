import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, Icon } from '../components';

const Pill = (props) => {
  const { className, disabled, icon, hideClose, onClick, label, type } = props;
  const classes = cx('pill', className, {
    'pill--default': type === 'default',
    'pill--primary': type === 'primary',
  });

  return (
    <Button reset className={classes} onClick={onClick} disabled={disabled}>{icon ? (<Icon icon={icon} className="pill__icon" />) : null} {label} {(!disabled && !hideClose) && <Icon icon="close" className="pill__close" /> }</Button>
  );
};

Pill.displayName = 'RhinoPill';

Pill.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  hideClose: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'primary']),
};

Pill.defaultProps = {
  onClick: () => {},
  type: 'default',
  hideClose: false,
};

export default Pill;
