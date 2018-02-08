import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { TabsContent, TabContentPane, NavTabs, NavTabsItem } from '../components';
import tabsExample from './examples/Tabs.example.txt';

const exampleScope  = {
  React,
  ReactDOM,
  TabsContent,
  TabContentPane,
  NavTabs,
  NavTabsItem,
};

class TabsApp extends React.Component {
  render() {
    return (
      <div>
        <section className="site-section">
          <h3 className="site-subheadline">About Tabs</h3>
          <p className="site-text-lead">This page demonstrates how to implement a tabbed system. It is important to note that we do not have a &apos;tabs&apos; component.</p>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Tabs Playground</h3>
          <Playground theme="default" codeText={tabsExample} scope={exampleScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<TabsApp />, document.getElementById('js-app'));
