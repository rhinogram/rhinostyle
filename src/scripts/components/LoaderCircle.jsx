import cx    from 'classnames';
import { Linear, TimelineMax } from 'gsap';
import PropTypes from 'prop-types';
import React from 'react';

class LoaderCircle extends React.Component {
  static displayName = 'RhinoLoaderCircle';

  static propTypes = {
    className: PropTypes.string,
    pause: PropTypes.bool,
    size: PropTypes.string,
  };

  static defaultProps = {
    pause: false,
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
    const { className, size } = this.props;

    const classes = cx('loader-circle', className, {
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
