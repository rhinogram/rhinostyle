import React    from 'react';
import ReactDOM from 'react-dom';

import { ModalSystem, ModalContainer, Button, Input, ModalHeader, ModalBody, ModalFooter, Icon } from '../components';
import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const modalExample = require('raw!./examples/Modal.example.txt');
const modalHeaderExample = require('raw!./examples/ModalHeader.example.txt');
const modalBodyExample = require('raw!./examples/ModalBody.example.txt');
const modalFooterExample = require('raw!./examples/ModalFooter.example.txt');

const modalHeaderDocs = {
  icon: '[Optional] - Attaches an Icon to the Modal Header',
  iconClassName: '[Optional] - Adds a class to the Modal Header icon',
  title: '[Optional] - Modal Title -  String to represent the Modal Header',
};

const modalBodyDocs = {
  size: '[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized modal body',
};

const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Input,
  ModalSystem,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
};

class ModalApp extends React.Component {

  state = {
    firstName: '',
    lastName: '',
  }

  onClick = () => {
    ModalSystem.addModal(this.renderContent());
  };

  handleChange = (name, value) => {
    const newState = {};

    newState[name] = value;
    this.setState(newState);
  }

  closeModal = () => {
    ModalSystem.removeModal();
  }

  saveChanges = () => {
    const errors = {};

    if (!this.state.firstName) {
      errors.firstName = 'FirstName is required!';
    }

    if (!this.state.lastName) {
      errors.lastName = 'LastName is required!';
    }

    const errorCount  = Object.keys(errors).length

    if (errorCount > 0) {
      ModalSystem.refreshModal(this.renderContent(errors));
    } else {
      this.closeModal();
    }
  }

  renderContent = (errors) => {
    const errorList = errors || {};

    return (
      <div className="modal">
        <ModalHeader title="This is a sample Modal" />
        <ModalBody>
          <div className="form">
            <div className="form__group">
              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />
            </div>
            <div>
              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="u-text-right">
            <Button type="default" onClick={this.closeModal}>Close</Button>&nbsp;
            <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>
          </div>
        </ModalFooter>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1 className="site-headline">Modals</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Modal Example</h3>
          <p className="site-copy">You can inject a modal by calling <code>ModalSystem.addModal(modal)</code>, where <code>modal</code> can be <code>div className="modal"</code> containing <code>ModalHeader</code>, <code>ModalBody</code>, <code>ModalFooter</code>.</p>
          <Playground docClass={ModalContainer.default} codeText={modalExample} scope={exampleScope} noRender={false} />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">ModalHeader</h3>
          <Playground docClass={ModalHeader} propDescriptionMap={modalHeaderDocs} codeText={modalHeaderExample} scope={exampleScope} noRender={false} />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">ModalBody</h3>
          <Playground docClass={ModalBody} propDescriptionMap={modalBodyDocs} codeText={modalBodyExample} scope={exampleScope} noRender={false} />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">ModalFooter</h3>
          <Playground docClass={ModalFooter} codeText={modalFooterExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
}

ReactDOM.render(<ModalApp />, document.getElementById('js-app'));
