import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import {
  Collapse,
  Button,
  Bucket,
  BucketHeader,
  BucketBody,
  Icon,
  Scrollbars,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../components';
import { Live } from './components';
import CollapseExample from './examples/Collapse.example.txt';

const CollapseDocs = {
  children: 'A single node containing the contents inside the collapsed panel.',
  className: 'Class passed to the collapse container',
  isOpen: 'Control the state of the collapse',
  onTransitionStart: 'Optional function that will be run when the transition begins',
  onTransitionEnd: 'Optional function that will be run when the transition ends',
  onTransitionCancelled: 'Optional function that will be run if the collapse is toggled mid-transition, this is helpful when wanting to reverse anything done at onTransitionStart event since we will not see a onTransitionEnd here.', // eslint-disable-line max-len
};
const CollapseScope = {
  React,
  ReactDOM,
  Collapse,
  Button,
  Bucket,
  BucketHeader,
  BucketBody,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Scrollbars,
};

const CollapseApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Collapse</h3>
      <p className="site-text-lead">Toggle the visibility of content across your project.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>

      <Live
        code={CollapseExample}
        scope={CollapseScope}
        component={Collapse}
        propDescriptions={CollapseDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<CollapseApp />, document.getElementById('root'));
