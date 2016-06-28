import React from 'react';
import cx    from 'classnames';

class Modal extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
    size:       React.PropTypes.string,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className, size } = this.props;

    const siteModalClasses = cx('site-modal', className);

    const modalClasses = cx('modal', className);

    const containerClasses = cx('modal__container', className, {
      'modal__container--sm':   size === 'sm',
      'modal__container--lg':   size === 'lg',
    });

    return (
      <div>
        <div className={siteModalClasses}>
          <div className={modalClasses}>
            <div className={containerClasses}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
