import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const UtilityList = (props) => {
  const { className, space, ...opts } = props;
  const classes = cx('u-list', className, {
    'u-list--space': space,
  });

  return (
    <ul className={classes} {...opts}>
      {props.children}
    </ul>
  );
};

UtilityList.displayName = 'RhinoUtilityList';

UtilityList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  space: PropTypes.bool,
};

UtilityList.defaultProps = {
  children: null,
  space: null,
};

export default UtilityList;
