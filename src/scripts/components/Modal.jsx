import React from 'react';
import cx    from 'classnames';

class Modal extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children:   React.PropTypes.node,
    className:  React.PropTypes.string,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className } = this.props;

    const siteModalClasses = cx('site-modal', className);

    const modalClasses = cx('modal', className);

    return (
      <div>
        <div className={siteModalClasses}>
          <div className={modalClasses}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
