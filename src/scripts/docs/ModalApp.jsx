import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Icon, UtilityInlineGrid } from '../components';
import { Live } from './components';
import ModalExample from './examples/Modal.example.txt';
import ModalHeaderExample from './examples/ModalHeader.example.txt';
import ModalBodyExample from './examples/ModalBody.example.txt';
import ModalFooterExample from './examples/ModalFooter.example.txt';

const ModalDocs = {
  size: "<code>oneOf(['small', 'large'])</code>", // eslint-disable-line single-quotes
};
const ModalHeaderDocs = {
  onClose: 'Callback function to execute in addition to closing the modal',
  title: 'String to represent the Modal Header',
  titleSub: 'String to add subtitle to header',
};
const ModalBodyDocs = {};
const ModalFooterDocs = {};
const ModalScope = {
  React,
  ReactDOM,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
  UtilityInlineGrid,
};

const ModalApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Modal Example</h3>
      <p className="site-copy">
        Although the <code>&lt;Modal /&gt;</code> component is written inline, it actually renders outside of the main application to retain proper styling.
      </p>

      <Live
        code={ModalExample}
        scope={ModalScope}
        component={Modal}
        propDescriptions={ModalDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalHeader</h3>

      <Live
        code={ModalHeaderExample}
        scope={ModalScope}
        component={ModalHeader}
        propDescriptions={ModalHeaderDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalBody</h3>

      <Live
        code={ModalBodyExample}
        scope={ModalScope}
        component={ModalBody}
        propDescriptions={ModalBodyDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ModalFooter</h3>

      <Live
        code={ModalFooterExample}
        scope={ModalScope}
        component={ModalFooter}
        propDescriptions={ModalFooterDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<ModalApp />, document.getElementById('root'));
