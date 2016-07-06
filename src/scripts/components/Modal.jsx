import React from 'react';
import cx    from 'classnames';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Modal extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    size:         React.PropTypes.string,
    isOpen:       React.PropTypes.bool,
    transitionName: React.PropTypes.node,
  };

  static defaultProps = {
    type:   'default',
    isOpen: false,
  };

  render() {
    const { className, size } = this.props;

    const modalClasses      = cx('modal', className);
    const containerClasses  = cx('modal__container', 'fade', 'in', {
      'modal__container--sm':   size === 'sm',
      'modal__container--lg':   size === 'lg',
    });
    if (this.props.isOpen) {
      return (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
          <div className={modalClasses} style={{ display: 'block' }}>
            <div className={containerClasses}>
              {this.props.children}
            </div>
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
    }
    // return (
    //   <div className={modalClasses} style={{ display: 'block' }}>
    //     <div className={containerClasses}>
    //       {this.props.children}
    //     </div>
    //   </div>
    // );
  }
}

export default Modal;
