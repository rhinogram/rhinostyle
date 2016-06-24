import React    from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const tooltipsExample = require('raw!./examples/Tooltips.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Button,
};
const TooltipsApp = () =>
  <div>
    <h1 className="site-headline">Tooltips</h1>

    <section className="site-section">
      <h3 className="site-subheadline">About Tooltips</h3>
      <p className="u-text-lead">Our tooltips are handled purely by CSS via data attributes.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Tooltips Playground</h3>
      <Playground codeText={tooltipsExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<TooltipsApp />, document.getElementById('js-app'));
