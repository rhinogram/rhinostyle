import React from 'react';
import cx    from 'classnames';

const UtilityInlineGrid = (props) => {
  const { size, align } = props;
  const classes = cx('u-inline-grid', {
    'u-inline-grid--small': size === 'small',
    'u-inline-grid--large': size === 'large',
    'u-flex-justify-center': align === 'center',
    'u-flex-justify-end': align === 'right',
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
  align:     React.PropTypes.oneOf(['center', 'right']),
};

UtilityInlineGrid.defaultProps = {
  children: null,
  size: null,
  align: null,
};

export default UtilityInlineGrid;
