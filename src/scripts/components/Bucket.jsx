import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Bucket = (props) => {
  const { className, type } = props;
  const classes = cx('bucket', className, {
    'bucket--default': type === 'default',
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
  type: PropTypes.oneOf(['default']),
};

Bucket.defaultProps = {
  type: 'default',
};

export default Bucket;
