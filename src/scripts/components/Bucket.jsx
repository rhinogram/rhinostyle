import React from 'react';
import cx    from 'classnames';

const Bucket = (props) => {
  const { className, size, type } = props;
  const classes = cx('bucket', type, className, {
    'bucket--warm':   type === 'warm',
    'bucket--sm':     size === 'small',
  });

  return (
    <div className={classes}>
      <div className="bucket__body">
        {props.children}
      </div>
    </div>
  );
};

Bucket.displayName = 'RhinoBucket';

Bucket.propTypes = {
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
  size:      React.PropTypes.oneOf(['small']),
  type:      React.PropTypes.oneOf(['default', 'warm']),
};

export default Bucket;
