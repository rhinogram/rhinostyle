import React      from 'react';
import ReactDOM   from 'react-dom';
import Playground from 'component-playground';

import { Close } from '../components';

/* eslint import/no-unresolved: 0 */
const closeExample = require('raw!./examples/Close.example.txt');

const closeDocs = {
  className: '[Optional] - Include additional class name(s)',
  onClick: '[Required] - Include click function for Close',
};

const exampleScope  = {
  React,
  ReactDOM,
  Close,
};

const PillApp = () =>
  <div>
    <h1 className="site-headline">Close</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Close</h3>
      <p className="site-text-lead">The Close component is used within numerous components - particularly in our feedback system.</p>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Close} propDescriptionMap={closeDocs} codeText={closeExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<PillApp />, document.getElementById('js-app'));
