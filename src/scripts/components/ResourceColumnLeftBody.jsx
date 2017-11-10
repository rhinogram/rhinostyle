import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ResourceColumnLeftBody = (props) => {
  const { className, children } = props;
  const classes = cx('resource__column-left__body', className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ResourceColumnLeftBody.displayName = 'RhinoResourceColumnLeftBody';

ResourceColumnLeftBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ResourceColumnLeftBody.defaultProps = {
  className: '',
};

export default ResourceColumnLeftBody;
