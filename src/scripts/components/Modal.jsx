import cx from 'classnames';
import { TimelineMax } from 'gsap';
import React from 'react';
import { componentWillAppendToBody } from 'react-append-to-body';

import { UtilitySystem } from '../components';

class Modal extends React.Component {
  static displayName = 'RhinoModal';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    size: React.PropTypes.string,
    open: React.PropTypes.bool,
    onComplete: React.PropTypes.func,
    onReverseComplete: React.PropTypes.func,
    onReverseStart: React.PropTypes.func,
    onStart: React.PropTypes.func,
  };

  static defaultProps = {
    children: null,
    className: '',
    size: '',
    open: false,
    onComplete: () => {},
    onReverseComplete: () => {},
    onReverseStart: () => {},
    onStart: () => {},
  };

  componentDidMount() {
    const $body = document.body;
    const $modal = this.modal;

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $modal.timeline = new TimelineMax({
      paused: !this.props.open,
      onStart: () => {
        $body.classList.add('modal-open');
        $modal.classList.add(UtilitySystem.config.classes.open);

        // Fire off prop update
        this.props.onStart();
      },
      onUpdate: () => {
        const newTime = $modal.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
            // Fire off prop update
            this.props.onReverseStart();

            $body.classList.remove('modal-open');
            $modal.classList.remove(UtilitySystem.config.classes.open);
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        // Focus on active modal for screen readers
        $modal.focus();

        // Fire off prop update
        this.props.onComplete();
      },
      onReverseComplete: () => {
        // Fire off prop update
        this.props.onReverseComplete();
      },
    });

    $modal.timeline
    .set($modal, {
      display: 'block',
    })
    .to($modal, 0.25, {
      css: {
        opacity: 1,
      },
    })
    .to($modal.querySelector('.modal__dialog'), 0.5, {
      css: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      ease: UtilitySystem.config.easing,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  /**
   * Open modal
   * @return {void}
   */
  openModal = () => {
    const $modal = this.modal;

    $modal.timeline.play();
  }

  /**
   * Close modal
   * @return {void}
   */
  closeModal = () => {
    const $modal = this.modal;

    $modal.timeline.reverse();
  }

  render() {
    const { children, className, size } = this.props;
    const modalClasses = cx('modal__dialog', {
      'modal__dialog--small': size === 'small',
      'modal__dialog--large': size === 'large',
    }, className);

    return (
      <div className="modal" ref={ref => (this.modal = ref)}>
        <div className={modalClasses}>
          <div className="modal__content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default componentWillAppendToBody(Modal);
