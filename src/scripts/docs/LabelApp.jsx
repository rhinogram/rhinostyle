import React    from 'react';
import ReactDOM from 'react-dom';

import { Label } from '../components';

import Playground from 'component-playground';

const labelExample = require('raw!./examples/Label.example.txt');
const exampleScope  = {
  React:  React,
  ReactDOM: ReactDOM,
  Label: Label
};

class LabelApp extends React.Component {
  static displayName = 'Rhinostyle Label Example';

  render() {
    return (
      <div>
        <h1 className="site-headline">Labels</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Label Types</h3>
          <Label label="default label" />
          <Label type="primary" label="primary label" />
          <Label type="secondary" label="secondary label" />
          <Label type="accent" label="accent label" />
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={labelExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
}

ReactDOM.render(<LabelApp />, document.getElementById('js-app'));
