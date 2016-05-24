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

const ProgressBarApp = React.createClass({
  displayName: 'Rhinostyle Progress Bar Example',

  render() {
    return (
      <div>
        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={progressBarExample} scope={exampleScope} noRender={false} />
        </section>
      </div>
    );
  }
});

ReactDOM.render(<ProgressBarApp />, document.getElementById('js-app'));
