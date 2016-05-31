import React    from 'react';
import ReactDOM from 'react-dom';

import { ProgressBar } from '../components';

import Playground from 'component-playground';

const progressBarExample = require('raw!./examples/ProgressBar.example.txt');
const exampleScope  = {
  React:  React,
  ReactDOM: ReactDOM,
  ProgressBar: ProgressBar
};

class ProgressBarApp extends React.Component {
  static displayName = 'Rhinostyle Progress Bar Example';

  render() {
    return (
      <div>
        <h1 className="site-headline">Progress Bars <small>(pssst! click on progress bars!)</small></h1>
        <section className="site-section">
          <h3 className="site-subheadline">Progress Bar Types</h3>
          <ProgressBar progress={20} classes="u-m-b" />
          <ProgressBar progress={40} type="primary" classes="u-m-b" />
          <ProgressBar progress={60} type="secondary" classes="u-m-b" />
          <ProgressBar progress={80} type="temperature" classes="u-m-b" />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Progress Bar Labels</h3>
          <ProgressBar progress={60} showLabel={true} type="primary"/>
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={progressBarExample} scope={exampleScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<ProgressBarApp />, document.getElementById('js-app'));
