import React from 'react';
import cx    from 'classnames';

const BucketHeader = (props) => {
  const { className } = props;
  const classes = cx('bucket__header', className);

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

BucketHeader.displayName = 'RhinoBucketHeader';

BucketHeader.propTypes = {
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
};

export default BucketHeader;
