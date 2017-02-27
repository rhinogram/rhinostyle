import React from 'react';
import cx    from 'classnames';

import Icon from './Icon';

const Label = (props) => {
  const { className, icon, iconBump, label, type } = props;
  const classes = cx('label', className, {
    'label--accent':    type === 'accent',
    'label--danger':    type === 'danger',
    'label--default':   type === 'default',
    'label--secondary': type === 'secondary',
  });

  return (
    <span className={classes}>{icon ? (<Icon icon={icon} bump={iconBump} className="label__icon" />) : null}<span>{label}</span></span>
  );
};

Label.displayName = 'RhinoLabel';

Label.propTypes = {
  className: React.PropTypes.string,
  icon:      React.PropTypes.string,
  iconBump:  React.PropTypes.oneOf(['down', 'up']),
  label:     React.PropTypes.string.isRequired,
  type:      React.PropTypes.string,
};

Label.defaultProps = {
  type: 'default',
};

export default Label;
