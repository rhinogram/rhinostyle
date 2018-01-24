import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const ResourceColumnRightWrapper = (props) => {
  const { children, noFlex } = props;
  const classes = cx('resource__column-right-wrapper', {
    'resource__column-right-wrapper--no-flex': noFlex,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ResourceColumnRightWrapper.displayName = 'RhinoResourceColumnRightWrapper';

ResourceColumnRightWrapper.propTypes = {
  children: PropTypes.node,
  noFlex: PropTypes.bool,
};

export default ResourceColumnRightWrapper;
