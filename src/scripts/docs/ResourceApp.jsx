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
  children: 'Stuff',
};

const TooltipsApp = () =>
  (<div>
    <section className="site-section">
      <h3 className="site-subheadline">Resources</h3>
      <p className="site-text-lead">Description</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Tooltips Playground</h3>
      <Playground theme="default" docClass={Resource} propDescriptionMap={resourceDocs} codeText={resourceExample} scope={exampleScope} noRender={false} />
    </section>
  </div>);

ReactDOM.render(<TooltipsApp />, document.getElementById('js-app'));
