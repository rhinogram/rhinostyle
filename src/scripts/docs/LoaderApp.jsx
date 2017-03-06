import React      from 'react';
import ReactDOM   from 'react-dom';
import Playground from 'component-playground';

import { LoaderCircle, LoaderPulse, LoaderLine } from '../components';

const loaderCircleExample  = require('raw-loader!./examples/LoaderCircle.example.txt');
const loaderCircleDocs = {
  className: '[Optional] - Include additional class name(s)',
  size: '[Optional] - LoaderCircle size -  [small | large]',
  type: '[Optional] - LoaderCircle type -  [default | primary]',
};
const loaderCircleScope = {
  React,
  ReactDOM,
  LoaderCircle,
};
/* eslint import/no-unresolved: 0 */
const loaderLineExample  = require('raw-loader!./examples/LoaderLine.example.txt');
const loaderLineDocs = {
  className: '[Optional] - Include additional class name(s)',
};
const loaderLineScope = {
  React,
  ReactDOM,
  LoaderLine,
};
const loaderPulseExample = require('raw-loader!./examples/LoaderPulse.example.txt');
const loaderPulseDocs = {
  className: '[Optional] - Include additional class name(s)',
  type: '[Optional] - LoaderPulse type -  [secondary | accent]',
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
      <h3 className="site-subheadline">LoaderCircle Types</h3>
      <p className="site-copy"><code>type="default | primary"</code></p>
      <LoaderCircle /> <LoaderCircle type="primary" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderCircle Sizes</h3>
      <p className="site-copy"><code>size="small | large"</code></p>
      <LoaderCircle size="small" /> <LoaderCircle /> <LoaderCircle size="large" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderCircle Playground</h3>
      <Playground docClass={LoaderCircle} propDescriptionMap={loaderCircleDocs} codeText={loaderCircleExample} scope={loaderCircleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderPulse Types</h3>
      <p className="site-copy"><code>type="default | secondary | accent"</code></p>
      <LoaderPulse /><br />
      <LoaderPulse type="accent" /><br />
      <LoaderPulse type="secondary" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderPulse Playground</h3>
      <Playground docClass={LoaderPulse} propDescriptionMap={loaderPulseDocs} codeText={loaderPulseExample} scope={loaderPulseScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderLine</h3>
      <LoaderLine />
    </section>

    <section>
      <h3 className="site-subheadline">LoaderLine Playground</h3>
      <Playground docClass={LoaderLine} propDescriptionMap={loaderLineDocs} codeText={loaderLineExample} scope={loaderLineScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<LoaderApp />, document.getElementById('js-app'));
