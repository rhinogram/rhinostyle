import cx from 'classnames';
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
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

UtilityListItem.defaultProps = {
  children: null,
};

export default UtilityListItem;
