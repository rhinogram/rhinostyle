import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const UtilityList = (props) => {
  const { border, className, space, ...opts } = props;
  const classes = cx('u-list', className, {
    'u-list--space': space && !border,
    'u-list--border': border,
  });

  return (
    <ul className={classes} {...opts}>
      {props.children}
    </ul>
  );
};

UtilityList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  space: PropTypes.bool,
  border: PropTypes.bool,
};

export default UtilityList;
