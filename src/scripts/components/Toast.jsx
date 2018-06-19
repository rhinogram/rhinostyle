import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TimelineMax } from 'gsap/TweenMax';

import { Icon, UtilitySystem } from '../components';

// This needs to be a proper component because we reference refs in other portions of the app
class Toast extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.timeline) this.attachTimeline();
  }

  attachTimeline = () => {
    const $toast = this.toast;
    const time = 0.5;

    // Adds in bottom spacing
    // Separating this out from timeline since we are using the `reverse()` to show the toast which adds in the alternate of the default props 💥
    const bottomSpacing = new TimelineMax({ paused: true })
      .to($toast, time, {
        marginBottom: (UtilitySystem.config.contentSpacing / 2),
        ease: UtilitySystem.config.easing,
      });

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $toast.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        // Remove bottom spacing for stacked toast notifications
        bottomSpacing.reverse();

        $toast.setAttribute('aria-hidden', true);
      },
      onUpdate: () => {
        const newTime = $toast.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
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

        if (this.props.onDismissed) this.props.onDismissed();
      },
    });

    $toast.timeline.to($toast, time, {
      css: {
        marginTop: -$toast.offsetHeight,
        transformOrigin: 'center center',
        y: '50%',
        opacity: 0,
      },
      ease: UtilitySystem.config.easing,
    });

    // Since the `mount` is run when we'd like to render and start the animation, we progress the animation to the end; which "shows" the toast, and then play the animation after the interval
    // This is also runt to calculate things like the offsetHeight
    $toast.timeline.progress(1, true).reverse();

    // "Play" into view
    $toast.timeline.reverse();

    setTimeout(() => {
      // Only auto init close if it's not already closed (or in the process of closing)
      if ($toast.timeline.progress() !== 1) {
        $toast.timeline.play();
      }
    }, 3000);
  }

  handleOnDismiss = () => {
    if (this.toast.timeline) this.toast.timeline.play();

    this.props.onDismiss();
  }

  render() {
    const { body, className, id, type } = this.props;
    const classes = cx('toast', className, {
      'toast--danger': type === 'danger',
      'toast--default': type === 'default',
      'toast--success': type === 'success',
    });

    const renderIcon = () => {
      let icon;
      let bump = null;

      switch (type) {
        case 'danger':
          icon = 'alert-triangle';
          bump = 'up';
          break;
        case 'success':
          icon = 'checkmark';
          break;
        default:
          icon = 'info-circle';
          break;
      }

      return (
        <Icon icon={icon} bump={bump} className="toast__icon" />
      );
    };

    return (
      <div
        ref={ref => (this.toast = ref)}
        role="button"
        tabIndex={0}
        className={classes}
        onClick={this.handleOnDismiss}
        id={id}
      >
        {renderIcon()}
        <div className="toast__text">
          {body}
        </div>
        <Icon icon="close" size="small" className="toast__close" />
      </div>
    );
  }
}

Toast.propTypes = {
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  onDismiss: PropTypes.func,
  onDismissed: PropTypes.func,
  type: PropTypes.oneOf(['danger', 'default', 'success']),
  timeline: PropTypes.bool,
  id: PropTypes.string,
};

Toast.defaultProps = {
  onDismiss: () => {},
  type: 'default',
};

export default Toast;
