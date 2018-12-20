import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Label, Scrollbars } from '../components';
import { Live } from './components';
import ScrollUpBarExample from './examples/ScrollUpBar.example.txt';

const ScrollbarDocs = {};
const ScrollUpBarScope = {
  React,
  ReactDOM,
  Label,
  Scrollbars,
};

const ScrollUpBarApp = () => (
  <Fragment>
    <section className="site-section">
      <h1>Hello World</h1>
      <Live
        code={ScrollUpBarExample}
        scope={ScrollUpBarScope}
        component={Scrollbars}
        propDescriptions={ScrollbarDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<ScrollUpBarApp />, document.getElementById('root'));
