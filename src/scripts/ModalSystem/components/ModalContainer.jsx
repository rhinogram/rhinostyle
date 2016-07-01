import React    from 'react';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '../../components';

class ModalContainer extends React.Component {
  static propTypes = {
    body:         React.PropTypes.node,
    children:     React.PropTypes.node,
    dismissable:  React.PropTypes.bool,
    footer:       React.PropTypes.node,
    icon:         React.PropTypes.string,
    notification: React.PropTypes.object,
    size:         React.PropTypes.string,
    title:        React.PropTypes.string,
  }

  render() {
    const { title, body, footer, icon, dismissable } = this.props;
    return (
      <div>
        <div className="modal__backdrop">
        </div>
        <Modal>
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
