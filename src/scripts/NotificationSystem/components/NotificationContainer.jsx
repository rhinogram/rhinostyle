import { TimelineMax } from 'gsap/TweenMax';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import { Toast, UtilitySystem } from '../../components';
import * as NotificationActions from '../actions';
import NotificationConstants from '../constants';

const AUTO_DISMISS_TIME  = NotificationConstants.autodismissTime;
const TOAST_TIMING = 0.5;

class NotificationContainer extends React.Component {
  componentDidMount() {
    const $toast = ReactDOM.findDOMNode(this.toast);

    // Adds in bottom spacing
    // Separating this out from timeline since we are using the `reverse()` to show the toast which adds in the alternate of the default props 💥
    const bottomSpacing = new TimelineMax({ paused: true })
      .to($toast, TOAST_TIMING, {
        marginBottom: (UtilitySystem.config.contentSpacing / 2),
        ease: UtilitySystem.config.easing,
      });

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $toast.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        // Remove ottom spacing for stacked toast notifications
        bottomSpacing.reverse();

        $toast.setAttribute('aria-hidden', true);

        // Fire off prop update
        if (this.props.onStart) this.props.onStart();
      },
      onUpdate: () => {
        const newTime = $toast.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
            // Fire off prop update
            if (this.props.onReverseStart) this.props.onReverseStart();

            // Bottom spacing for stacked toast notifications
            bottomSpacing.play();

            $toast.classList.remove(UtilitySystem.config.classes.hidden);
            $toast.classList.remove(UtilitySystem.config.classes.uHidden);

            $toast.setAttribute('aria-hidden', false);
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        $toast.classList.remove(UtilitySystem.config.classes.hidden);

        NotificationActions.removeNotification(this.props.notification.id);

        // Fire off prop update
        if (this.props.onComplete) this.props.onComplete();
      },
      onReverseComplete: () => {
        // Fire off prop update
        if (this.props.onReverseComplete) this.props.onReverseComplete();
      },
    });

    $toast.timeline.to($toast, TOAST_TIMING, {
      css: {
        marginTop: -$toast.offsetHeight,
        transformOrigin: 'center center',
        y: '50%',
        opacity: 0,
      },
      ease: UtilitySystem.config.easing,
    });

    // Since the `componentDidMount()` is run when we'd like to render and start the animation, we progress the animation to the end; which "shows" the toast, and then play the animation after the interval
    $toast.timeline.progress(1, true).reverse();

    setTimeout(() => {
      // Only auto init close if it's not already closed (or in the process of closing)
      if ($toast.timeline.progress() !== 1) {
        $toast.timeline.play();
      }
    }, AUTO_DISMISS_TIME);
  }

  hideNotification = () => {
    const $toast = ReactDOM.findDOMNode(this.toast);

    $toast.timeline.play();
  };

  render() {
    const { body, type } = this.props.notification;

    return (
      <Toast ref={ref => (this.toast = ref)} type={type} body={body} onDismiss={this.hideNotification} />
    );
  }
}

NotificationContainer.propTypes = {
  notification: PropTypes.object,
  onDismiss: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
};

export default NotificationContainer;
