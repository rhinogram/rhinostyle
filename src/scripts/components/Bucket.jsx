import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Bucket = (props) => {
  const { className, size, type } = props;
  const classes = cx('bucket', className, {
    'bucket--default': type === 'default',
    'bucket--light':   type === 'light',
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
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small']),
  type: PropTypes.oneOf(['default', 'light', 'primary']),
};

Bucket.defaultProps = {
  type: 'default',
};

export default Bucket;
