import React  from 'react';
import cx     from 'classnames';


import { ModalBody, ModalContent, ModalFooter, ModalHeader, Modal } from '../../components';

class ModalContainer extends React.Component {
  static displayName = 'RhinoModalContainer';

  static propTypes = {
    body:          React.PropTypes.node,
    dismissable:   React.PropTypes.bool,
    footer:        React.PropTypes.node,
    icon:          React.PropTypes.string,
    iconClassName: React.PropTypes.string,
    size:          React.PropTypes.string,
    title:         React.PropTypes.string,
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
    const { body, dismissable, footer, icon, iconClassName, size, title } = this.props;

    const classes = cx('modal-backdrop');

    return (
      <div>
        <div className={classes}></div>
        <Modal isOpen={this.state.isOpen} size={size}>
          <ModalContent>
            <ModalHeader title={title} icon={icon} iconClassName={iconClassName} dismissable={dismissable} />
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

export default ModalContainer;
