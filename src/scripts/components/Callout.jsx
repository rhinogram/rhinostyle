import React from 'react';
import cx    from 'classnames';

const Callout = (props) => {
  const { body, className, heading, type } = props;
  const classes = cx('callout', className, {
    'callout--danger':  type === 'danger',
    'callout--default': type === 'default',
    'callout--info':    type === 'info',
  });

  return (
    <div className={classes}>
      <div className="callout__heading">{heading}</div>
      <div className="callout__body">{body}</div>
    </div>
  );
};

Callout.displayName = 'RhinoCallout';

Callout.propTypes = {
  body:      React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  heading:   React.PropTypes.string.isRequired,
  type:      React.PropTypes.oneOf(['danger', 'default', 'info']),
};

Callout.defaultProps = {
  type: 'default',
};

export default Callout;
