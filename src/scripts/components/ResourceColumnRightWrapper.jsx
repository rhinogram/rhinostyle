import PropTypes from 'prop-types';
import React from 'react';

const ResourceColumnRightWrapper = (props) => {
  const { children } = props;

  return (
    <div className="resource__column-right-wrapper">
      {children}
    </div>
  );
};

ResourceColumnRightWrapper.displayName = 'RhinoResourceColumnRightWrapper';

ResourceColumnRightWrapper.propTypes = {
  children: PropTypes.node,
};

export default ResourceColumnRightWrapper;
