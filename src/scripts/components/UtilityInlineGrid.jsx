import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const UtilityInlineGrid = (props) => {
  const { align, size } = props;
  const classes = cx('u-inline-grid', {
    'u-inline-grid--small': size === 'small',
    'u-inline-grid--large': size === 'large',
    'u-inline-grid--middle': align === 'middle',
    'u-inline-grid--right': align === 'right',
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

UtilityInlineGrid.displayName = 'RhinoUtilityInlineGrid';

UtilityInlineGrid.propTypes = {
  align: PropTypes.oneOf(['middle', 'right']),
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'large']),
};

UtilityInlineGrid.defaultProps = {
  align: null,
  children: null,
  size: null,
};

export default UtilityInlineGrid;
