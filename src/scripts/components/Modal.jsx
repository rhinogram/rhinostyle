import cx from 'classnames';
import { TimelineMax } from 'gsap';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import { UtilitySystem } from '../components';

class Modal extends React.Component {
  state = {
    renderModal: false,
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && nextProps.open) {
      this.setState({
        renderModal: true,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.attachTimeline();
    }

    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  /**
   * Called after the modal animation is done closing
   * Takes care of removing `<Modal />` from DOM
   *
   */
  onReverseComplete = () => {
    this.setState({
      renderModal: false,
    }, () => {
      if (this.props.onReverseComplete) {
        this.props.onReverseComplete();
      }
    });
  }

  attachTimeline = () => {
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
        // Fire off function that handles prop update and removal from DOM
        this.onReverseComplete();
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
      .to($modal.querySelector('.modal__dialog'), 0.25, {
        css: {
          opacity: 1,
          y: 0,
        },
        ease: UtilitySystem.config.easingBounce,
      });
  }

  openModal = () => {
    const $modal = this.modal;

    $modal.timeline.play();
  }

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
    const { renderModal } = this.state;

    return (
      renderModal &&
        ReactDOM.createPortal(
          <div className="modal" ref={ref => (this.modal = ref)}>
            <div className={modalClasses}>
              <div className="modal__content">
                {children}
              </div>
            </div>
          </div>,
          document.body,
        )
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  open: PropTypes.bool,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  open: false,
  onComplete: () => {},
  onReverseComplete: () => {},
  onReverseStart: () => {},
  onStart: () => {},
};

Modal.displayName = 'RhinoModal';

export default Modal;
