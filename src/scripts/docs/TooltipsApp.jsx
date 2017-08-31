import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Button, Tooltip, UtilityInlineGrid } from '../components';
import tooltipsExample from './examples/Tooltips.example.txt';

const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Tooltip,
  UtilityInlineGrid,
};

const TooltipsApp = () =>
  (<div>
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
      <Playground theme="default" codeText={tooltipsExample} scope={exampleScope} noRender={false} />
    </section>
  </div>);

ReactDOM.render(<TooltipsApp />, document.getElementById('js-app'));
