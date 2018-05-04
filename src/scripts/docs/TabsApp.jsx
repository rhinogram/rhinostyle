import React from 'react';
import ReactDOM from 'react-dom';

import { TabsContent, TabContentPane, NavTabs, NavTabsItem } from '../components';
import { Live } from './components';
import TabsExample from './examples/Tabs.example.txt';

const TabsDocs = {};
const TabsScope  = {
  React,
  ReactDOM,
  TabsContent,
  TabContentPane,
  NavTabs,
  NavTabsItem,
};

const TabsApp = () => (
  <section className="site-section">
    <h3 className="site-subheadline">Tabs Playground</h3>

    <Live
      code={TabsExample}
      scope={TabsScope}
      propDescriptions={TabsDocs}
    />
  </section>
);

ReactDOM.render(<TabsApp />, document.getElementById('root'));
