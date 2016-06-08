import React from 'react';
import cx    from 'classnames';

class LoaderPulse extends React.Component {
  static displayName = 'RhinoLoaderPulse';

  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className, type } = this.props;

    const classes = cx('loader-pulse', className, {
      'loader-pulse--default':   type === 'default',
      'loader-pulse--primary':   type === 'primary',
      'loader-pulse--secondary': type === 'secondary',
      'loader-pulse--accent':    type === 'accent',
    });

    return (
      <div className={classes}>
        <span className="loader-pulse__pulse"></span><span className="loader-pulse__pulse"></span><span className="loader-pulse__pulse"></span>
      </div>
    );
  }
}

export default LoaderPulse;
