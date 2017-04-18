import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { ModalSystem, Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Icon, UtilityInlineGrid } from '../components';
import modalExample from './examples/Modal.example.txt';
import modalHeaderExample from './examples/ModalHeader.example.txt';
import modalBodyExample from './examples/ModalBody.example.txt';
import modalFooterExample from './examples/ModalFooter.example.txt';

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
  UtilityInlineGrid,
};

const ModalApp = () =>
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Modal Example</h3>
      <p className="site-copy">You can inject a modal by calling <code>ModalSystem.addModal(modal)</code>, where <code>modal</code> can be <code>Modal</code> containing <code>ModalHeader</code>, <code>ModalBody</code>, <code>ModalFooter</code>.</p>
      <Playground theme="default" docClass={Modal} propDescriptionMap={modalDocs} codeText={modalExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalHeader</h3>
      <Playground theme="default" docClass={ModalHeader} propDescriptionMap={modalHeaderDocs} codeText={modalHeaderExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalBody</h3>
      <Playground theme="default" docClass={ModalBody} codeText={modalBodyExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalFooter</h3>
      <Playground theme="default" docClass={ModalFooter} codeText={modalFooterExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<ModalApp />, document.getElementById('js-app'));
