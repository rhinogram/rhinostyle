import React from 'react';
import cx    from 'classnames';

const LoaderCircle = (props) => {
  const { className, size, type } = props;
  const classes = cx('loader-circle', className, {
    'loader-circle--default':   type === 'default',
    'loader-circle--primary':   type === 'primary',
    'loader-circle--lg':        size === 'large',
    'loader-circle--sm':        size === 'small',
  });

  return (
    <div className={classes} />
  );
};

LoaderCircle.displayName = 'RhinoLoaderCircle';

LoaderCircle.propTypes = {
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  type: React.PropTypes.string,
};

LoaderCircle.defaultProps = {
  type: 'default',
};

export default LoaderCircle;
