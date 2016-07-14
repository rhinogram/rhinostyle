import React from 'react';
import cx    from 'classnames';

const Bucket = (props) => {
  const { className, size, type } = props;
  const classes = cx('bucket', className, {
    'bucket--default': type === 'default',
    'bucket--primary': type === 'primary',
    'bucket--sm':      size === 'small',
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Bucket.displayName = 'RhinoBucket';

Bucket.propTypes = {
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
  size:      React.PropTypes.oneOf(['small']),
  type:      React.PropTypes.oneOf(['default', 'primary']),
};

Bucket.defaultProps = {
  type: 'default',
};

export default Bucket;
