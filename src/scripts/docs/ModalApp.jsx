import React    from 'react';
import ReactDOM from 'react-dom';

import { ModalActions, Button, Input, Modal, ModalContent, ModalHeader, ModalHeaderTitle, ModalBody, ModalFooter } from '../components';

class ModalApp extends React.Component {
  

  render() {
    return (
      <div>
        <h1 className="site-headline">Modals</h1>
        <section className="site-section">
          <h3 className="site-subheadline">Modal Example</h3>
          <p className="site-copy">To see a modal in action, <a href="#" onClick={this.onClick}>click here</a>.</p>

          <Modal size="sm">
            <ModalContent>
              <ModalHeader>
                <ModalHeaderTitle title="This is a small modal" />
              </ModalHeader>
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
                <Button type="secondary">Save Changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalContent>
              <ModalHeader dismissable={false}>
                <ModalHeaderTitle icon="calendar" title="This is a normal, non-dismissable modal with an Icon" />
              </ModalHeader>
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
                <Button type="secondary">Save Changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal size="lg">
            <ModalContent>
              <ModalHeader>
                <ModalHeaderTitle title="This is a really, really longg modal title. Will it wrap? or will we see the elipsis? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </ModalHeader>
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
                <Button type="secondary">Save Changes</Button>
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
