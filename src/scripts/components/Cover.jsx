import cx from 'classnames';
import { TimelineMax } from 'gsap';
import PropTypes from 'prop-types';
import React from 'react';
import Portal from 'react-overlays/lib/Portal';

import { UtilitySystem } from '../components';

class Cover extends React.Component {
  static displayName = 'RhinoCover';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    open: PropTypes.bool,
    onComplete: PropTypes.func,
    onReverseComplete: PropTypes.func,
    onReverseStart: PropTypes.func,
    onStart: PropTypes.func,
  };

  static defaultProps = {
    children: null,
    className: '',
    open: false,
    onComplete: () => {},
    onReverseComplete: () => {},
    onReverseStart: () => {},
    onStart: () => {},
  };

  componentDidMount() {
    const $body = document.body;
    const $cover = this.cover;

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $cover.timeline = new TimelineMax({
      paused: !this.props.open,
      onStart: () => {
        $body.classList.add('cover-open');
        $cover.classList.add(UtilitySystem.config.classes.open);

        // Fire off prop update
        this.props.onStart();
      },
      onUpdate: () => {
        const newTime = $cover.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
            // Fire off prop update
            this.props.onReverseStart();

            $body.classList.remove('cover-open');
            $cover.classList.remove(UtilitySystem.config.classes.open);
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        // Focus on active cover for screen readers
        $cover.focus();

        // Fire off prop update
        this.props.onComplete();
      },
      onReverseComplete: () => {
        // Fire off prop update
        this.props.onReverseComplete();
      },
    });

    $cover.timeline
      .set($cover, {
        css: {
          display: 'flex',
        },
      })
      .to($cover, 0.5, {
        css: {
          opacity: 1,
          y: 0,
        },
        ease: UtilitySystem.config.easing,
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.openCover();
      } else {
        this.closeCover();
      }
    }
  }

  /**
   * Open cover
   * @return {void}
   */
  openCover = () => {
    const $cover = this.cover;

    $cover.timeline.play();
  }

  /**
   * Close cover
   * @return {void}
   */
  closeCover = () => {
    const $cover = this.cover;

    $cover.timeline.reverse();
  }

  render() {
    const { children, className } = this.props;
    const classes = cx('cover', className);

    return (
      <Portal>
        <div className={classes} ref={ref => (this.cover = ref)}>
          {children}
        </div>
      </Portal>
    );
  }
}

export default Cover;
