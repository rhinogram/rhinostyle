import React from 'react';
import cx    from 'classnames';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Modal extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:       React.PropTypes.node,
    className:      React.PropTypes.string,
    isOpen:         React.PropTypes.bool,
    size:           React.PropTypes.string,
    transitionName: React.PropTypes.node,
  };

  static defaultProps = {
    type:     'default',
    isOpen:   false,
  };

  render() {
    const { className, size } = this.props;

    const modalClasses      = cx('modal', className);
    const containerClasses  = cx('modal__container', 'fade', 'in', {
      'modal__container--sm':   size === 'sm',
      'modal__container--lg':   size === 'lg',
    });
    let returnVal = null;

    if (this.props.isOpen) {
      returnVal = (
        <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <div className={modalClasses} style={{ display: 'block' }}>
            <div className={containerClasses}>
              {this.props.children}
            </div>
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      returnVal = <ReactCSSTransitionGroup transitionName={this.props.transitionName} transitionEnterTimeout={500} transitionLeaveTimeout={300} />;
    }
    return returnVal;
  }
}

export default Modal;
