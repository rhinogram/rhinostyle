import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { ProgressBar } from '../components';

/* eslint import/no-unresolved: 0 */
const progressBarExample = require('raw-loader!./examples/ProgressBar.example.txt');
const progressDocs = {
  className: '[Optional] - Include additional class name(s)',
  progress:  '[Optional] - The initial \'fill\' of the ProgressBar',
  showLabel: '[Optional] - Show the progress in % on the ProgressBar',
  type:      '[Optional] - Type of ProgressBar, as a string -  [default | primary | secondary | temperature]',
};
const exampleScope = {
  React,
  ReactDOM,
  ProgressBar,
};

const ProgressBarApp = () =>
  <div>
    <h1 className="site-headline">Progress Bars</h1>
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

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={ProgressBar} propDescriptionMap={progressDocs} codeText={progressBarExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<ProgressBarApp />, document.getElementById('js-app'));
