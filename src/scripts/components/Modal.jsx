/* eslint no-return-assign:0 */
import cx                      from 'classnames';
import React                   from 'react';
import TweenMax from 'gsap';

class Modal extends React.Component {
  static displayName = 'RhinoModal';

  static propTypes = {
    children:       React.PropTypes.node,
    className:      React.PropTypes.string,
    isOpen:         React.PropTypes.bool,
    size:           React.PropTypes.string,
  };

  static defaultProps = {
    type:   'default',
    isOpen: false,
  };

  componentDidUpdate() {
    TweenMax.set(this.modal, {
      display: 'flex',
      opacity: 0,
      scale: 0.9
    });

    TweenMax.to(this.modal, 0.35, {
      scale: 1,
      opacity: 1,
      /* eslint no-undef:0 */
      ease: Expo.easeInOut
    });
  }

  render() {
    const props = this.props;
    const { className, size } = props;
    const modalClasses     = cx('modal', className);
    const containerClasses = cx('modal__container', {
      'modal__container--sm': size === 'sm',
      'modal__container--lg': size === 'lg',
    });

    let returnVal = null;

    if (props.isOpen) {
      returnVal = (
        <div id="rhino-modal" ref={(ref) => this.modal = ref} className={modalClasses}>
          <div className={containerClasses}>
            {props.children}
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
