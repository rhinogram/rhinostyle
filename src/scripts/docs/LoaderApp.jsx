import React      from 'react';
import ReactDOM   from 'react-dom';
import Playground from 'component-playground';

import { LoaderCircle, LoaderPulse } from '../components';
import loaderCircleExample from './examples/LoaderCircle.example.txt';
import loaderPulseExample from './examples/LoaderPulse.example.txt';

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
      <p className="site-copy"><code>type=&quot;default | primary&quot;</code></p>
      <LoaderCircle /> <LoaderCircle type="primary" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderCircle Sizes</h3>
      <p className="site-copy"><code>size=&quot;small | large&quot;</code></p>
      <LoaderCircle size="small" /> <LoaderCircle /> <LoaderCircle size="large" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderCircle Playground</h3>
      <Playground theme="default" docClass={LoaderCircle} propDescriptionMap={loaderCircleDocs} codeText={loaderCircleExample} scope={loaderCircleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderPulse Types</h3>
      <p className="site-copy"><code>type=&quot;default | secondary | accent&quot;</code></p>
      <LoaderPulse /><br />
      <LoaderPulse type="accent" /><br />
      <LoaderPulse type="secondary" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderPulse Playground</h3>
      <Playground theme="default" docClass={LoaderPulse} propDescriptionMap={loaderPulseDocs} codeText={loaderPulseExample} scope={loaderPulseScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<LoaderApp />, document.getElementById('js-app'));
