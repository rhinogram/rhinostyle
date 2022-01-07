import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

const Label = (props) => {
  const { className, icon, iconBump, label, type } = props;
  const classes = cx('label', className, {
    'label--accent': type === 'accent',
    'label--danger': type === 'danger',
    'label--default': type === 'default',
    'label--secondary': type === 'secondary',
  });

  return (
    <span className={classes}>{icon ? (<Icon icon={icon} bump={iconBump} className="label__icon" />) : null}<span>{label}</span></span>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconBump: PropTypes.oneOf(['down', 'up']),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['accent', 'danger', 'default', 'secondary']),
};

Label.defaultProps = {
  type: 'default',
};

export default Label;
