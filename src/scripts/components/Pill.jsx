import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Icon }  from '../components';

const Pill = (props) => {
  const { className, disabled, icon, onClick, label, type } = props;
  const classes = cx('button--reset pill', className, {
    'pill--default':  type === 'default',
    'pill--neutral':  type === 'neutral',
  });

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>{icon ? (<Icon icon={icon} className="pill__icon" />) : null} {label}<span className="pill__close">&times;</span></button>
  );
};

Pill.displayName = 'RhinoPill';

Pill.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'neutral']),
};

Pill.defaultProps = {
  onClick: () => {},
  type: 'default',
};

export default Pill;
