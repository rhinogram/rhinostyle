import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ResourceBody = (props) => {
  const { className, children } = props;
  const classes = cx('resource__body', className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ResourceBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ResourceBody;
