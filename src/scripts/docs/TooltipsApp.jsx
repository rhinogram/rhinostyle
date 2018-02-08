import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Icon, Tooltip, UtilityInlineGrid } from '../components';
import tooltipsExample from './examples/Tooltips.example.txt';

const exampleScope  = {
  React,
  ReactDOM,
  Icon,
  Tooltip,
  UtilityInlineGrid,
};

const tooltipDocs = {
  children: 'Only accepts one child',
  placement: 'Position of tooltip - [top | right | bottom | left]',
  content: 'Content of tooltip. May contain HTML or other components',
  delay: 'Delay showing the tooltip onmouseenter. Can be either the prop itself (defaults 1000 milliseconds) or you can pass in a value',
};

const TooltipsApp = () => (
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">About Tooltips</h3>
      <p className="site-text-lead">Our tooltips can be attached to any valid element, including other React components. For desktop, a tooltip is initiated on <code>mouseenter</code> and <code>mouseleave</code> of the trigger. The component interaction is disabled on touch devices due to a lack of hover state.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Tooltips Playground</h3>
      <Playground theme="default" docClass={Tooltip} propDescriptionMap={tooltipDocs} codeText={tooltipsExample} scope={exampleScope} noRender={false} />
    </section>
  </div>
);

ReactDOM.render(<TooltipsApp />, document.getElementById('js-app'));
