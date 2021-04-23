import cx from 'classnames';
import { TimelineMax } from 'gsap/TweenMax';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import { UtilitySystem } from '.';

class Cover extends React.Component {
  state = {
    renderCover: false,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.setState({
        renderCover: true,
      });
      this.attachTimeline();
    }

    if (prevProps.open && !this.props.open) {
      this.closeCover();
    }
  }

  /**
   * Called after the cover animation is done closing
   * Takes care of removing `<Cover />` from DOM
   *
   */
  onReverseComplete = () => {
    this.setState({
      renderCover: false,
    }, () => {
      if (this.props.onReverseComplete) {
        this.props.onReverseComplete();
      }
    });
  }

  attachTimeline = () => {
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
        if (this.props.onStart) this.props.onStart();
      },
      onUpdate: () => {
        const newTime = $cover.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
            // Fire off prop update
            if (this.props.onReverseStart) this.props.onReverseStart();

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
        if (this.props.onComplete) this.props.onComplete();
      },
      onReverseComplete: () => {
        // Fire off function that handles prop update and removal from DOM
        if (this.onReverseComplete) this.onReverseComplete();
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
    const { renderCover } = this.state;

    return (
      renderCover &&
        ReactDOM.createPortal(
          <div className={classes} ref={(ref) => (this.cover = ref)}>
            {children}
          </div>,
          document.body,
        )
    );
  }
}

Cover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
};

export default Cover;
