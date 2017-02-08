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
  };

  componentDidMount() {
    const $body = document.body;
    const $modal = this.modal;
    const $modalContainer = document.querySelector('[data-js="modalContainer"]');

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $modal.timeline = new TimelineMax({
      paused: true,
      onStart() {
        $body.classList.add('modal-open');
        console.log('started');
      },
      onUpdate: () => {
        const newTime = $modal.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
            $body.classList.remove('modal-open');
            $modal.classList.remove('is-open');
          }
        }
        lastTime = newTime;
      },
      onComplete() {
        // Focus on active modal for screen readers
        $modal.focus();
      },
      onReverseComplete() {
        ReactDOM.unmountComponentAtNode($modalContainer);
        $body.removeChild($modalContainer);
        console.log('reverse completed');
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
