import cx    from 'classnames';
import { Linear, TimelineMax } from 'gsap';
import PropTypes from 'prop-types';
import React from 'react';

class LoaderPulse extends React.Component {
  static displayName = 'RhinoLoaderPulse';

  static propTypes = {
    className: PropTypes.string,
    pause: PropTypes.bool,
    type: PropTypes.string,
  };

  static defaultProps = {
    pause: false,
    type: 'default',
  };

  componentDidMount() {
    const $loader = this.loader;
    const $loaderPulses = $loader.querySelectorAll('.loader-pulse__pulse');

    $loader.timeline = new TimelineMax({
      paused: this.props.pause,
    })
      .staggerTo($loaderPulses, 0.25, {
        opacity: 1,
        repeat: -1,
        repeatDelay: 0.25,
        yoyo: true,
        scale: 1.25,
        ease: Linear.easeNone,
      }, 0.125, 'loader');
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
    const { className, type } = this.props;
    const classes = cx('loader-pulse', className, {
      'loader-pulse--default':   type === 'default',
      'loader-pulse--secondary': type === 'secondary',
      'loader-pulse--accent':    type === 'accent',
    });

    return (
      <div className={classes} ref={ref => (this.loader = ref)}>
        <span className="loader-pulse__pulse" /><span className="loader-pulse__pulse" /><span className="loader-pulse__pulse" />
      </div>
    );
  }
}

export default LoaderPulse;
