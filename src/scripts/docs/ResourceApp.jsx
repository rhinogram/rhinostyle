import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Resource, ResourceGroup, ResourceColumnLeftWrapper, ResourceColumnLeftIntro, ResourceColumnLeftBody, ResourceColumnRightWrapper } from '../components';
import resourceExample from './examples/Resource.example.txt';

const exampleScope  = {
  React,
  ReactDOM,
  Resource,
  ResourceGroup,
  ResourceColumnLeftWrapper,
  ResourceColumnLeftIntro,
  ResourceColumnLeftBody,
  ResourceColumnRightWrapper,
};

const resourceDocs = {
  active: '[Optional] - Adds active styling to item; normally used within a list view',
  selected: '[Optional] - Used in conjunction with interfaceMode to determine an actively selected item',
  disabled: '[Optional] - Disables onClick functionality and adds in additional styling',
  interfaceMode: '[Optional] - Set on the parent <ResourceGroup /> is passed down to impact styling of an item - [radio | checkbox]',
  onClick: '[Optional] - Fires on click of an item',
  unread: '[Optional] - Adds unread styling to an item; normally used within a list view',
};

const ResourcesApp = () =>
  (<div>
    <section className="site-section">
      <h3 className="site-subheadline">Resources</h3>
      <p className="site-text-lead">A multi-use component used to display items throughout the application.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Resources Playground</h3>
      <Playground theme="default" docClass={Resource} propDescriptionMap={resourceDocs} codeText={resourceExample} scope={exampleScope} noRender={false} />
    </section>
  </div>);

ReactDOM.render(<ResourcesApp />, document.getElementById('js-app'));
