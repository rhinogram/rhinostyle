import cx    from 'classnames';
import React from 'react';

const Bucket = (props) => {
  const { className, size, type } = props;
  const classes = cx('bucket', className, {
    'bucket--default': type === 'default',
    'bucket--light':   type === 'light',
    'bucket--primary': type === 'primary',
    'bucket--small':      size === 'small',
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Bucket.displayName = 'RhinoBucket';

Bucket.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  size: React.PropTypes.oneOf(['small']),
  type: React.PropTypes.oneOf(['default', 'light', 'primary']),
};

Bucket.defaultProps = {
  type: 'default',
};

export default Bucket;
