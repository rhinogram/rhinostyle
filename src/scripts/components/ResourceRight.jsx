import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const ResourceRight = (props) => {
  const { children, noFlex } = props;
  const classes = cx('resource__right', {
    'resource__right--no-flex': noFlex,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ResourceRight.propTypes = {
  children: PropTypes.node,
  noFlex: PropTypes.bool,
};

export default ResourceRight;
