import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const ResourceBottom = (props) => {
  const { children, className } = props;
  const classes = cx('resource__bottom', className);

  return (
    children && (
      <div className={classes}>
        {children}
      </div>
    )
  );
};

ResourceBottom.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ResourceBottom;
