import React    from 'react';
import ReactDOM from 'react-dom';

import { ModalSystem, ModalContainer, Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '../components';
import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const modalExample = require('raw!./examples/Modal.example.txt');

const modalDocs = {
  body: '[Required] - Modal Body - Typically represented by a renderBody function that returns JSX',
  dismissable: '[Optional] - Gives an X icon in Modal Header to close Modal',
  footer: '[Required] - Modal Footer - Typically represented by a renderFooter function that returns JSX',
  icon: '[Optional] - Attaches an Icon to the Modal Header',
  size: '[Optional] - Modal size -  [ sm | lg ] - defaults to a normal sized modal',
  title: '[Required] - Modal Title -  String to represent the Modal Header',
};

const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Input,
  ModalSystem,
};

class ModalApp extends React.Component {

  onClick = (event) => {
    event.preventDefault();
    ModalSystem.addModal({
      body:         this.renderBody(),
      dismissable:  true,
      footer:       this.renderFooter(),
      icon:         'cog',
      size:         'lg',
      title:        'This is a Demo Modal',
    });
  };

  closeModal = () => {
    ModalSystem.removeModal();
  }

  saveChanges = () => {
    alert('the changes have been saved');
    this.closeModal();
  }

  renderBody = () =>
    <div className="form">
      <div className="form__group">
        <Input label="First Name" />
      </div>
      <div>
        <Input label="Last Name" className="u-m-b-0" />
      </div>
    </div>;

  renderFooter = () =>
    <div>
      <Button type="default" onClick={this.closeModal}>Close</Button>
      <Button type="primary" onClick={this.saveChanges}>Save Changes</Button>
    </div>;

  render() {
    return (
      <div>
        <h1 className="site-headline">Modals</h1>
        <section className="site-section">
          <h3 className="site-subheadline">Modal Example</h3>
          <p className="site-copy">To see a modal in action, <a href="#" onClick={this.onClick}>click here</a>.</p>

          <div className="site-modal">
            <Modal isOpen transitionName="modal-anim">
              <ModalContent>
                <ModalHeader dismissable={false} icon="calendar" title="This is a normal, non-dismissable modal with an Icon" />
                <ModalBody>
                  <div className="form">
                    <Input label="First Name" />
                    <Input label="Last Name" className="u-m-b-0" />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button type="default">Close</Button>
                  <Button type="primary">Save Changes</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>

        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Modal Sizes</h3>
          <p>Add the <code>modal__container--sm</code> modifier to <code>modal__container</code> for a smaller modal.</p>
          <p>Add the <code>modal__container--lg</code> modifier to <code>modal__container</code> for a larger modal.</p>
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground docClass={ModalContainer.default} propDescriptionMap={modalDocs} codeText={modalExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
}

ReactDOM.render(<ModalApp />, document.getElementById('js-app'));
