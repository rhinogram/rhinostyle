import React from 'react';
import cx    from 'classnames';

class Modal extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    size:         React.PropTypes.string,
  };

  static defaultProps = {
    type:   'default',
    isOpen: false,
  };

  render() {
    const { className, size } = this.props;

    const modalClasses      = cx('fade', 'in', 'modal', className);
    const containerClasses  = cx('modal__container', 'fade', 'in', {
      'modal__container--sm':   size === 'sm',
      'modal__container--lg':   size === 'lg',
    });

    return (
      <div className={modalClasses} style={{ display: 'block' }}>
        <div className={containerClasses}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
