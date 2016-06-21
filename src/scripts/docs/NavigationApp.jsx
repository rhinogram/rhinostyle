import React    from 'react';
import ReactDOM from 'react-dom';

import { Tabs, TabsContent, TabContentPane, NavTabs, NavTabsItem } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const navigationExample = require('raw!./examples/Navigation.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  Tabs,
  TabsContent,
  TabContentPane,
  NavTabs,
  NavTabsItem,
};

const NavigationApp = () =>
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Tab Types</h3>
      <Playground codeText={navigationExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));
