import React    from 'react';
import cx       from 'classnames';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '../../components';

class ModalContainer extends React.Component {
  static propTypes = {
    body:         React.PropTypes.node,
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    dismissable:  React.PropTypes.bool,
    footer:       React.PropTypes.node,
    icon:         React.PropTypes.string,
    size:         React.PropTypes.string,
    title:        React.PropTypes.string,
    modal:        React.PropTypes.object,
  }

  render() {
    const { body, className, dismissable, footer, icon, size, title } = this.props.modal;

    const classes = cx('modal-backdrop', 'fade', 'in', className);

    return (
      <div>
        <div className={classes}>
        </div>
        <Modal size={size}>
          <ModalContent>
            <ModalHeader title={title} icon={icon} dismissable={dismissable} />
            <ModalBody>
              {body}
            </ModalBody>
            <ModalFooter>
              {footer}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }
}

/* eslint new-cap:0 */
export default ModalContainer;
