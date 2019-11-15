import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Collapse, Button } from '../components';
import { Live } from './components';
import CollapseExample from './examples/Collapse.example.txt';

const CollapseDocs = {};
const CollapseScope = {
  React,
  ReactDOM,
  Collapse,
  Button,
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
