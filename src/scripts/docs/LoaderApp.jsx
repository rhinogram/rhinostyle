import React    from 'react';
import ReactDOM from 'react-dom';

import { LoaderPulse, LoaderLine } from '../components';

import Playground from 'component-playground';

const loaderExample = require('raw!./examples/Loader.example.txt');
const exampleScope  = {
  React:  React,
  ReactDOM: ReactDOM,
  LoaderPulse: LoaderPulse,
  LoaderLine: LoaderLine
};

class LoaderApp extends React.Component {
  static displayName = 'Rhinostyle Loader Example';

  render() {
    return (
      <div>
        <h1 className="site-headline">Loaders</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Loader Pulse</h3>

          <div class="u-m-b-md">
            <LoaderPulse /><br />
            <LoaderPulse type="accent" /><br />
            <LoaderPulse type="secondary" />
          </div>

        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Loader Line</h3>

          <div class="u-m-b-md">
            <LoaderLine />
          </div>

        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={loaderExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
}

ReactDOM.render(<LoaderApp />, document.getElementById('js-app'));
