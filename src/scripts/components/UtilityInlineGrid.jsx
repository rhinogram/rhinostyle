import cx from 'classnames';
import React from 'react';

const UtilityInlineGrid = (props) => {
  const { align, size } = props;
  const classes = cx('u-inline-grid', {
    'u-inline-grid--small': size === 'small',
    '': size === 'regular',
    'u-inline-grid--large': size === 'large',
    'u-inline-grid--middle': align === 'middle',
    'u-inline-grid--right': align === 'right',
  });

  return (
    <ul className={classes}>
      {props.children}
    </ul>
  );
};

UtilityInlineGrid.displayName = 'RhinoUtilityInlineGrid';

UtilityInlineGrid.propTypes = {
  align: React.PropTypes.oneOf(['middle', 'right']),
  children: React.PropTypes.node,
  size: React.PropTypes.oneOf(['small', 'regular', 'large']),
};

UtilityInlineGrid.defaultProps = {
  align: null,
  children: null,
  size: 'small',
};

export default UtilityInlineGrid;
