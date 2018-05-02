import React from 'react';
import ReactDOM from 'react-dom';

import { Close } from '../components';
import { Live } from './components';
import closeExample from './examples/Close.example.txt';

const closeDocs = {
  onClick: 'Click function for Close',
};
const closeScope  = {
  React,
  ReactDOM,
  Close,
};

const CloseApp = () => (
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Close</h3>
      <p className="site-text-lead">The Close component is used within numerous components - particularly in our feedback system.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>

      <Live
        code={closeExample}
        scope={closeScope}
        component={Close}
        propDescriptions={closeDocs}
      />
    </section>
  </div>
);

ReactDOM.render(<CloseApp />, document.getElementById('js-app'));
