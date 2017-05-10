import cx from 'classnames';
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
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  space: React.PropTypes.bool,
};

UtilityList.defaultProps = {
  children: null,
  space: null,
};

export default UtilityList;
