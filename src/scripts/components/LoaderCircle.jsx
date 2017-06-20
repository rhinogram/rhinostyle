import cx    from 'classnames';
import { Linear, TimelineMax } from 'gsap';
import React from 'react';

class LoaderCircle extends React.Component {
  static displayName = 'RhinoLoaderCircle';

  static propTypes = {
    className: React.PropTypes.string,
    pause: React.PropTypes.bool,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    pause: false,
    type: 'default',
  };

  componentDidMount() {
    const $loader = this.loader;

    $loader.timeline = new TimelineMax({
      repeat: -1,
      paused: this.props.pause,
    })
    .to($loader, 0.75, {
      rotation: '360deg',
      ease: Linear.easeNone,
    });
  }

  componentDidUpdate() {
    const $loader = this.loader;

    if (this.props.pause) {
      $loader.timeline.pause();
    } else if ($loader.timeline.paused() && !this.props.pause) {
      $loader.timeline.play();
    }
  }

  render() {
    const { className, size, type } = this.props;

    const classes = cx('loader-circle', className, {
      'loader-circle--default':   type === 'default',
      'loader-circle--primary':   type === 'primary',
      'loader-circle--large':        size === 'large',
      'loader-circle--small':        size === 'small',
      'loader-circle--xsmall':        size === 'xsmall',
    });

    return (
      <div className={classes} ref={ref => (this.loader = ref)} />
    );
  }
}

export default LoaderCircle;
