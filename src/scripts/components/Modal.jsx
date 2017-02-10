/* eslint no-return-assign:0 */
import cx                 from 'classnames';
import React              from 'react';
import ReactDOM           from 'react-dom';
import { TimelineMax, Expo } from 'gsap';

class Modal extends React.Component {
  static displayName = 'RhinoModal';

  static propTypes = {
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    size:      React.PropTypes.string,
    onComplete: React.PropTypes.func,
    onReverseComplete: React.PropTypes.func,
    onReverseStart: React.PropTypes.func,
    onStart: React.PropTypes.func,
    open: React.PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    className: null,
    size: null,
    onComplete: () => {},
    onReverseComplete: () => {},
    onReverseStart: () => {},
    onStart: () => {},
    open: false,
  }

  componentDidMount() {
    const $body = document.body;
    const $modal = this.modal;

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $modal.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        $body.classList.add('modal-open');

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
            $modal.classList.remove('is-open');
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
    .to($modal, 0.25, {
      css: {
        opacity: 1,
        display: 'block',
      },
    })
    .to($modal.querySelector('.modal__dialog'), 0.5, {
      css: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      ease: Expo.easeInOut,
    });

    if (this.props.open) {
      this.open();
    }
  }

  componentDidUpdate(prevProps) {
    console.log('did update', prevProps, this.props);
    if (this.props.open !== prevProps.open) {
      if (this.props.open) {
        console.log('should open');
        this.open();
      } else {
        console.log('should close');
        this.close();
      }
    }
  }

  open() {
    console.log('open it now')
    const $modal = this.modal;

    console.log($modal);

    $modal.timeline.play();
  }

  close() {
    const $modal = this.modal;

    $modal.timeline.reverse();
  }

  render() {
    const { children, className, size } = this.props;
    const modalClasses     = cx('modal__dialog', {
      'modal__dialog--sm': size === 'sm',
      'modal__dialog--lg': size === 'lg',
    }, className);

    return (
      <div className="modal" ref={ref => this.modal = ref}>
        <div className={modalClasses}>
          <div className="modal__content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
