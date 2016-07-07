import React from 'react';
import cx    from 'classnames';

const Label = (props) => {
  const { className, label, type } = props;
  const classes = cx('label', className, {
    'label--default':   type === 'default',
    'label--primary':   type === 'primary',
    'label--secondary': type === 'secondary',
    'label--accent':    type === 'accent',
  });

  return (
    <span className={classes}>{label}</span>
  );
};

Label.displayName = 'RhinoLabel';

Label.propTypes = {
  className: React.PropTypes.string,
  label:     React.PropTypes.string.isRequired,
  type:      React.PropTypes.string,
};

Label.defaultProps = {
  type: 'default',
};

export default Label;
