import React    from 'react';
import ReactDOM from 'react-dom';

import { LoaderPulse, LoaderLine } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const loaderLineExample  = require('raw!./examples/LoaderLine.example.txt');
const loaderLineDocs = {
  className: '[Optional] - Include additional class name(s)',
};
const loaderLineScope = {
  React,
  ReactDOM,
  LoaderLine,
};
const loaderPulseExample = require('raw!./examples/LoaderPulse.example.txt');
const loaderPulseDocs = {
  className: '[Optional] - Include additional class name(s)',
  type: '[Optional] - LoaderPulse type -  [primary | secondary | accent]',
};
const loaderPulseScope = {
  React,
  ReactDOM,
  LoaderPulse,
};

const LoaderApp = () =>
  <div>
    <h1 className="site-headline">Loaders</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Loader Pulse</h3>
      <LoaderPulse /><br />
      <LoaderPulse type="accent" /><br />
      <LoaderPulse type="secondary" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={LoaderPulse} propDescriptionMap={loaderPulseDocs} codeText={loaderPulseExample} scope={loaderPulseScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Loader Line</h3>
      <LoaderLine />
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={LoaderLine} propDescriptionMap={loaderLineDocs} codeText={loaderLineExample} scope={loaderLineScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<LoaderApp />, document.getElementById('js-app'));
