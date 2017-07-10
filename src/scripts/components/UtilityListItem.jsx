import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const UtilityListItem = (props) => {
  const { className, ...opts } = props;
  const classes = cx(className);

  return (
    <li className={classes} {...opts}>
      {props.children}
    </li>
  );
};

UtilityListItem.displayName = 'RhinoUtilityListItem';

UtilityListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

UtilityListItem.defaultProps = {
  children: null,
};

export default UtilityListItem;
