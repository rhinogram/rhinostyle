import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Close } from '../components';
import { Live } from './components';
import CloseExample from './examples/Close.example.txt';

const CloseDocs = {};
const CloseScope  = {
  React,
  ReactDOM,
  Close,
};

const CloseApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Close</h3>
      <p className="site-text-lead">The Close component is used within numerous components - particularly in our feedback system.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>

      <Live
        code={CloseExample}
        scope={CloseScope}
        component={Close}
        propDescriptions={CloseDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<CloseApp />, document.getElementById('root'));
