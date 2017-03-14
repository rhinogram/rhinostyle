import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Button, Icon, UtilityInlineGrid } from '../components';

/* eslint import/no-unresolved: 0 */
const tooltipsExample = require('raw-loader!./examples/Tooltips.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Icon,
  UtilityInlineGrid,
};

const TooltipsApp = () =>
  <div>
    <h1 className="site-headline">Tooltips</h1>

    <section className="site-section">
      <h3 className="site-subheadline">About Tooltips</h3>
      <p className="site-text-lead">Our tooltips are handled purely by CSS via data attributes. These <strong>are not</strong> ReactJS components.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Tooltip Data Attributes</h3>
      <div className="site-copy">
        <p>Pass tooltip text into any one of the following attributes.</p>
        <p><code>data-tooltip-top | data-tooltip-bottom | data-tooltip-left | data-tooltip-right</code></p>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Tooltips Playground</h3>
      <Playground codeText={tooltipsExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<TooltipsApp />, document.getElementById('js-app'));
