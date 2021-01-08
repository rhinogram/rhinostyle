import React from 'react';
import ReactDOM from 'react-dom';

import { Pill, UtilityInlineGrid } from '../components';
import { Live } from './components';
import PillExample from './examples/Pill.example.txt';

const PillDocs = {
  hideClose: 'Whether to show close icon',
  type: "<code>oneOf(['default', 'primary'])</code>",
};
const PillScope = {
  React,
  ReactDOM,
  Pill,
  UtilityInlineGrid,
};

const PillApp = () => (
  <>
    <section className="site-section">
      <h3 className="site-subheadline">Pills</h3>
      <p className="site-text-lead">The Pill component is used to display current filters or selections.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>

      <Live code={PillExample} scope={PillScope} component={Pill} propDescriptions={PillDocs} />
    </section>
  </>
);

ReactDOM.render(<PillApp />, document.getElementById('root'));
