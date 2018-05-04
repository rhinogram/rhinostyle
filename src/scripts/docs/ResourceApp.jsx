import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Icon, Resource, ResourceGroup, ResourceIntro, ResourceBody, ResourceRight } from '../components';
import { Live } from './components';
import ResourceExample from './examples/Resource.example.txt';

const ResourceScope  = {
  Icon,
  React,
  ReactDOM,
  Resource,
  ResourceGroup,
  ResourceIntro,
  ResourceBody,
  ResourceRight,
};
const ResourceDocs = {
  active: 'Adds active styling to item; normally used within a list view',
  selected: 'Used in conjunction with interfaceMode to determine an actively selected item',
  disabled: 'Disables onClick functionality and adds in additional styling',
  interfaceMode: "Set on the parent <code>&lt;ResourceGroup /&gt;</code> is passed down to impact styling of an item <code>oneOf(['radio', 'checkbox'])</code>", // eslint-disable-line single-quotes
  onClick: 'Fires on click of an item',
  unread: 'Adds unread styling to an item; normally used within a list view',
};

const ResourcesApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Resources</h3>
      <p className="site-text-lead">A multi-use component used to display items throughout the application.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Resources Playground</h3>

      <Live
        code={ResourceExample}
        scope={ResourceScope}
        component={Resource}
        propDescriptions={ResourceDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<ResourcesApp />, document.getElementById('root'));
