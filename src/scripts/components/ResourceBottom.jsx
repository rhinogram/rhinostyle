import PropTypes from 'prop-types';
import React from 'react';

const ResourceBottom = (props) => {
  const { children } = props;

  return (
    children && (
      <div className="resource__bottom">
        {children}
      </div>
    )
  );
};

ResourceBottom.propTypes = {
  children: PropTypes.node,
};

export default ResourceBottom;
