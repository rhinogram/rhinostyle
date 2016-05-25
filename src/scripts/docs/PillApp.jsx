import React    from 'react';
import ReactDOM from 'react-dom';

import { Pill } from '../components';

import Playground from 'component-playground';

const pillExample = require('raw!./examples/Pill.example.txt');
const exampleScope  = {
  React:  React,
  ReactDOM: ReactDOM,
  Pill: Pill
};

class PillApp extends React.Component {
  static displayName = 'Rhinostyle Pill Example';

  render() {
    return (
      <div>
        <h1 className="site-headline">Pills</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Pill Types</h3>
          <Pill label="Ben" />
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={pillExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
};

ReactDOM.render(<PillApp />, document.getElementById('js-app'));
