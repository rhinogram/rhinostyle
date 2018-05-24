import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const UtilityInlineGrid = (props) => {
  const { align, className, size } = props;
  const classes = cx('u-inline-grid', className, {
    'u-inline-grid--small': size === 'small',
    '': size === 'regular',
    'u-inline-grid--large': size === 'large',
    'u-inline-grid--middle': align === 'middle',
    'u-inline-grid--right': align === 'right',
    'u-inline-grid--between': align === 'between',
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

UtilityInlineGrid.propTypes = {
  align: PropTypes.oneOf(['middle', 'right', 'between']),
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'regular', 'large']),
};

UtilityInlineGrid.defaultProps = {
  size: 'small',
};

export default UtilityInlineGrid;
