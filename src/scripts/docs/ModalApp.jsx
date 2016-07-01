import React    from 'react';
import ReactDOM from 'react-dom';

import { ModalActions, Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '../components';

class ModalApp extends React.Component {

  onClick = (event) => {
    event.preventDefault();
    ModalActions.addModal({
      title:        'This is a sample Modal',
      icon:         'cog',
      body:         this.renderBody(),
      footer:       this.renderFooter(),
      dismissable:  true,
    });
  };

  closeModal = () => {
    ReactDOM.render(<div></div>, document.getElementById('js-modal-container'));
  }

  saveChanges = () => {
    alert('the changes have been saved');
    this.closeModal();
  }

  renderBody = () => {
    return (
      <div className="form">
        <div className="form__group">
          <Input label="First Name" />
        </div>
        <div>
          <Input label="Last Name" />
        </div>
      </div>
    );
  };

  renderFooter = () => {
    return (
      <div>
        <Button type="default" onClick={this.closeModal}>Close</Button>
        <Button type="primary" onClick={this.saveChanges}>Save Changes</Button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1 className="site-headline">Modals</h1>
        <section className="site-section">
          <h3 className="site-subheadline">Modal Example</h3>
          <p className="site-copy">To see a modal in action, <a href="#" onClick={this.onClick}>click here</a>.</p>

          <Modal size="sm">
            <ModalContent>
              <ModalHeader title="This is a small modall" icon="cog" />
              <ModalBody>
                <div className="form">
                  <div className="form__group">
                    <Input label="First Name" />
                  </div>
                  <div>
                    <Input label="Last Name" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="default">Close</Button>
                <Button type="primary">Save Changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalContent>
              <ModalHeader dismissable={false} icon="calendar" title="This is a normal, non-dismissable modal with an Icon" />
              <ModalBody>
                <div className="form">
                  <div className="form__group">
                    <Input label="First Name" />
                  </div>
                  <div>
                    <Input label="Last Name" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="default">Close</Button>
                <Button type="primary">Save Changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal size="lg">
            <ModalContent>
              <ModalHeader title="This is a really, really longg modal title. Will it wrap? or will we see the elipsis? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              <ModalBody>
                <div className="form">
                  <div className="form__group">
                    <Input label="First Name" />
                  </div>
                  <div>
                    <Input label="Last Name" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="default">Close</Button>
                <Button type="primary">Save Changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Modal Sizes</h3>
          <p>Add the <code>modal__container--sm</code> modifier to <code>modal__container</code> for a smaller modal.</p>
          <p>Add the <code>modal__container--lg</code> modifier to <code>modal__container</code> for a larger modal.</p>
        </section>

      </div>
    );
  }
}

ReactDOM.render(<ModalApp />, document.getElementById('js-app'));
