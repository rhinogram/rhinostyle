import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';

const ResourceColumnRightWrapper = (props) => {
  const { children, noFlex } = props;
  const classes = cx('resource__column-right-wrapper', {
    'resource__column-right-wrapper--no-flex': noFlex,
  });

  return (
    <Fragment>
      <div className={classes}>
        {children}
      </div>
      <div className="resource__break" />
    </Fragment>
  );
};

ResourceColumnRightWrapper.displayName = 'RhinoResourceColumnRightWrapper';

ResourceColumnRightWrapper.propTypes = {
  children: PropTypes.node,
  noFlex: PropTypes.bool,
};

export default ResourceColumnRightWrapper;
