import React from 'react';
import classNames from 'classnames';

class LoaderPulse extends React.Component {
  static displayName = 'RhinoLoaderPulse';

  static propTypes = {
    classes: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string
  };

  static defaultProps = {
    type: 'default'
  };

  render() {
    const { classes, label, type, ...props } = this.props;

    const cx = classNames('loader-pulse', classes, {
      'loader-pulse--default':   type==='default',
      'loader-pulse--primary':   type==='primary',
      'loader-pulse--secondary': type==='secondary',
      'loader-pulse--accent':    type==='accent'
    });

    return (
      <div className={cx}>
        <span className="loader-pulse__pulse"></span><span className="loader-pulse__pulse"></span><span className="loader-pulse__pulse"></span>
      </div>
    );
  }
}

export default LoaderPulse;
