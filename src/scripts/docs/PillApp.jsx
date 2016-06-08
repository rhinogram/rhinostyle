import React    from 'react';
import ReactDOM from 'react-dom';

import { Pill } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const pillExample = require('raw!./examples/Pill.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Pill,
};

const PillApp = () =>
  <div>
    <h1 className="site-headline">Pills</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Pill Types</h3>
      <div className="site-example-pills">
        <Pill label="Ben Bruning" />
        <Pill label="Craig Anthony" />
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground codeText={pillExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<PillApp />, document.getElementById('js-app'));
