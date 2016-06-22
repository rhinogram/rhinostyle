import React    from 'react';
import ReactDOM from 'react-dom';

import { Label } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const labelExample = require('raw!./examples/Label.example.txt');
const labelDocs = {
  className: '[Optional] - Include additional class name(s)',
  label: '[Required] - Label text',
  type: '[Optional] - Label type -  [default | primary | secondary | accent]',
};
const exampleScope  = {
  React,
  ReactDOM,
  Label,
};

const LabelApp = () =>
  <div>
    <h1 className="site-headline">Labels</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Label Types</h3>
      <div className="site-example-labels">
        <Label label="default label" />
        <Label type="primary" label="primary label" />
        <Label type="secondary" label="secondary label" />
        <Label type="accent" label="accent label" />
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Label} propDescriptionMap={labelDocs} codeText={labelExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<LabelApp />, document.getElementById('js-app'));
