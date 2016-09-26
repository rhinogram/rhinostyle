import React    from 'react';
import ReactDOM from 'react-dom';

import { Pill } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const pillExample = require('raw!./examples/Pill.example.txt');
const pillDocs = {
  className: '[Optional] - Include additional class name(s)',
  disabled:  '[Optional] - Pill is disabled',
  onClick:   '[Required] - Include click function for Pill',
  label:     '[Required] - Include label for Pill',
};
const exampleScope  = {
  React,
  ReactDOM,
  Pill,
};

const PillApp = () =>
  <div>
    <h1 className="site-headline">Pills</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Pills</h3>
      <p className="site-text-lead">The Pill component is used to display current filters or selections.</p>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Pill} propDescriptionMap={pillDocs} codeText={pillExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<PillApp />, document.getElementById('js-app'));
