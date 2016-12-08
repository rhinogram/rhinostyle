/* eslint no-return-assign:0 */
import cx                 from 'classnames';
import React              from 'react';
import { TweenMax, Expo } from 'gsap';

class Modal extends React.Component {
  static displayName = 'RhinoModal';

  static propTypes = {
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    size:      React.PropTypes.string,
  };

  componentDidMount() {
    TweenMax.set('.modal-backdrop', {
      opacity: 0,
    });

    TweenMax.set('#rhino-modal', {
      opacity: 0,
      scale: 0.98,
    });

    TweenMax.to('.modal-backdrop', 0.35, {
      opacity: 0.5,
      ease: Expo.easeOut,
    });

    TweenMax.to('#rhino-modal', 0.35, {
      scale: 1,
      opacity: 1,
      ease: Expo.easeOut,
    });
  }

  render() {
    const { children, className, size } = this.props;
    const modalClasses     = cx('modal', className);
    const containerClasses = cx('modal__container', {
      'modal__container--sm': size === 'sm',
      'modal__container--lg': size === 'lg',
    });

    return (
      <div>
        <div className="modal-backdrop" />
        <div id="rhino-modal" className={modalClasses}>
          <div className={containerClasses}>
            <div className="modal__content">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
