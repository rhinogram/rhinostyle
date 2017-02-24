/* eslint no-return-assign:0 */
import cx                 from 'classnames';
import React              from 'react';
import ReactDOM           from 'react-dom';
import { TimelineMax } from 'gsap';
import { config } from '../config';

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
  };

  static defaultProps = {
    children: null,
    className: '',
    size: '',
    onComplete: () => {},
    onReverseComplete: () => {},
    onReverseStart: () => {},
    onStart: () => {},
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
      onStart: () => {
        $body.classList.add('modal-open');
        $modal.classList.add(config.classes.open);

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
            $modal.classList.remove(config.classes.open);
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
        ReactDOM.unmountComponentAtNode($modalContainer);
        $body.removeChild($modalContainer);

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
      ease: config.easing,
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
