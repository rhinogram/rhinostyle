/* eslint no-return-assign:0 */
import cx                 from 'classnames';
import React              from 'react';
import { TweenMax, Expo } from 'gsap';

class Modal extends React.Component {
  static displayName = 'RhinoModal';

  static propTypes = {
    children:       React.PropTypes.node,
    isOpen:         React.PropTypes.bool,
    size:           React.PropTypes.string,
  };

  static defaultProps = {
    type:   'default',
    isOpen: false,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      TweenMax.set('.modal-backdrop', {
        opacity: 0,
      });

      TweenMax.set('#rhino-modal', {
        opacity: 0,
        scale: 0.9
      });

      TweenMax.to('.modal-backdrop', 0.35, {
        opacity: 0.5,
        ease: Expo.easeInOut,
      });

      TweenMax.to('#rhino-modal', 0.35, {
        scale: 1,
        opacity: 1,
        ease: Expo.easeInOut
      });
    }
  }

  render() {
    const { children, isOpen, size } = this.props;
    const modalClasses     = cx('modal');
    const containerClasses = cx('modal__container', {
      'modal__container--sm': size === 'sm',
      'modal__container--lg': size === 'lg',
    });

    let returnVal = null;

    if (isOpen) {
      returnVal = (
        <div id="rhino-modal" className={modalClasses}>
          <div className={containerClasses}>
            {children}
          </div>
        </div>
      );
    } else {
      returnVal = null;
    }

    return returnVal;
  }
}

export default Modal;
