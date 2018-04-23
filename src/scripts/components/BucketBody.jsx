import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const BucketBody = (props) => {
  const { className } = props;
  const classes = cx('bucket__body', className);

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

BucketBody.displayName = 'RhinoBucketBody';

BucketBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BucketBody;
