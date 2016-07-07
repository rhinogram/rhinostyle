import React from 'react';
import cx    from 'classnames';

const LoaderPulse = (props) => {
  const { className, type } = props;
  const classes = cx('loader-pulse', className, {
    'loader-pulse--default':   type === 'default',
    'loader-pulse--secondary': type === 'secondary',
    'loader-pulse--accent':    type === 'accent',
  });

  return (
    <div className={classes}>
      <span className="loader-pulse__pulse"></span><span className="loader-pulse__pulse"></span><span className="loader-pulse__pulse"></span>
    </div>
  );
};

LoaderPulse.displayName = 'RhinoLoaderPulse';

LoaderPulse.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string,
};

LoaderPulse.defaultProps = {
  type: 'default',
};

export default LoaderPulse;
