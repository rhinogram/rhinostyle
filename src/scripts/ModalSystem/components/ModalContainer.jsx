import React  from 'react';
import cx     from 'classnames';


import { ModalBody, ModalContent, ModalFooter, ModalHeader, Modal } from '../../components';

class ModalContainer extends React.Component {
  static displayName = 'RhinoModalContainer';

  static propTypes = {
    body:         React.PropTypes.node,
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    dismissable:  React.PropTypes.bool,
    footer:       React.PropTypes.node,
    icon:         React.PropTypes.string,
    modal:        React.PropTypes.object,
    size:         React.PropTypes.string,
    title:        React.PropTypes.string,
  };

  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.openModal();
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { body, dismissable, footer, icon, size, title } = this.props.modal;

    const classes = cx('modal-backdrop');

    return (
      <div>
        <div className={classes}></div>
        <Modal isOpen={this.state.isOpen} transitionName="modal-anim" size={size}>
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
