import PropTypes from 'prop-types';
import React from 'react';

const ResourceColumnLeftWrapper = (props) => {
  const { children } = props;

  return (
    <div className="resource__column-left-wrapper">
      {children}
    </div>
  );
};

ResourceColumnLeftWrapper.displayName = 'RhinoResourceColumnLeftWrapper';

ResourceColumnLeftWrapper.propTypes = {
  children: PropTypes.node,
};

export default ResourceColumnLeftWrapper;
