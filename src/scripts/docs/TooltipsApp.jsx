import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Icon, Tooltip, UtilityInlineGrid } from '../components';
import { Live } from './components';
import TooltipsExample from './examples/Tooltips.example.txt';

const TooltipsScope  = {
  React,
  ReactDOM,
  Icon,
  Tooltip,
  UtilityInlineGrid,
};
const TooltipsDocs = {
  children: 'Only accepts one child',
  placement: "Position of tooltip  <code>oneOf(['top', 'right', 'bottom', 'left'])</code>", // eslint-disable-line single-quotes
  content: 'Content of tooltip. May contain HTML or other components',
  delay: 'Delay showing the tooltip onmouseenter. Can be either the prop itself (defaults 1000 milliseconds) or you can pass in a value',
};

const TooltipsApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Tooltips</h3>
      <p className="site-text-lead">Our tooltips can be attached to any valid element, including other React components. For desktop, a tooltip is initiated on <code>mouseenter</code> and <code>mouseleave</code> of the trigger. The component interaction is disabled on touch devices due to a lack of hover state.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Tooltips Playground</h3>

      <Live
        code={TooltipsExample}
        scope={TooltipsScope}
        component={Tooltip}
        propDescriptions={TooltipsDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<TooltipsApp />, document.getElementById('js-app'));
