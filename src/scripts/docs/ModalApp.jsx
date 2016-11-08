import React    from 'react';
import ReactDOM from 'react-dom';

import { ModalSystem, Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Icon } from '../components';
import Playground from 'component-playground'; //eslint-disable-line

/* eslint import/no-unresolved: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const modalExample = require('raw!./examples/Modal.example.txt');
const modalHeaderExample = require('raw!./examples/ModalHeader.example.txt');
const modalBodyExample = require('raw!./examples/ModalBody.example.txt');
const modalFooterExample = require('raw!./examples/ModalFooter.example.txt');

const modalDocs = {
  className: '[Optional] - Additional class to add to modal div',
  size: '[Optional] - Modal size -  [ sm | lg ] - defaults to a normal sized modal',
};

const modalHeaderDocs = {
  icon: '[Optional] - Attaches an Icon to the Modal Header',
  iconClassName: '[Optional] - Adds a class to the Modal Header icon',
  onClose: '[Optional] - Callback function to execute in addition to closing the modal',
  title: '[Optional] - Modal Title -  String to represent the Modal Header',
};


const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Input,
  Modal,
  ModalSystem,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
};

const ModalApp = () =>
  <div>
    <h1 className="site-headline">Modals</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Modal Example</h3>
      <p className="site-copy">You can inject a modal by calling <code>ModalSystem.addModal(modal)</code>, where <code>modal</code> can be <code>Modal</code> containing <code>ModalHeader</code>, <code>ModalBody</code>, <code>ModalFooter</code>.</p>
      <Playground docClass={Modal} propDescriptionMap={modalDocs} codeText={modalExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalHeader</h3>
      <Playground docClass={ModalHeader} propDescriptionMap={modalHeaderDocs} codeText={modalHeaderExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalBody</h3>
      <Playground docClass={ModalBody} codeText={modalBodyExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalFooter</h3>
      <Playground docClass={ModalFooter} codeText={modalFooterExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<ModalApp />, document.getElementById('js-app'));
