import React from 'react';
import cx    from 'classnames';

const UtilityInlineGrid = (props) => {
  const { size } = props;
  const classes = cx('u-inline-grid', {
    'u-inline-grid--small': size === 'small',
    'u-inline-grid--large': size === 'large',
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

UtilityInlineGrid.displayName = 'RhinoUtilityInlineGrid';

UtilityInlineGrid.propTypes = {
  children:  React.PropTypes.node,
  size:      React.PropTypes.oneOf(['small', 'large']),
};

export default UtilityInlineGrid;
