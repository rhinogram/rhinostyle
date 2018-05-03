import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { ProgressBar } from '../components';
import { Live } from './components';
import ProgressBarExample from './examples/ProgressBar.example.txt';

const ProgressBarDocs = {
  progress: 'The initial \'fill\' of the ProgressBar',
  showLabel: 'Show the progress in % on the ProgressBar',
  type: "<code>oneOf(['default', 'primary', 'secondary', 'temperature'])</code>", // eslint-disable-line single-quotes
};
const ProgressBarScope = {
  React,
  ReactDOM,
  ProgressBar,
};

const ProgressBarApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">ProgressBar Types</h3>
      <p className="site-copy"><code>type=&quot;default | primary | secondary | temperature&quot;</code></p>
      <ProgressBar progress={20} className="u-m-b" />
      <ProgressBar progress={40} type="primary" className="u-m-b" />
      <ProgressBar progress={60} type="secondary" className="u-m-b" />
      <ProgressBar progress={80} type="temperature" className="u-m-b" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">ProgressBar Labels</h3>
      <p className="site-copy">Include <code>showLabel</code> property to create progress bar label.</p>
      <ProgressBar progress={60} showLabel type="primary" />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>

      <Live
        code={ProgressBarExample}
        scope={ProgressBarScope}
        component={ProgressBar}
        propDescriptions={ProgressBarDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<ProgressBarApp />, document.getElementById('js-app'));
