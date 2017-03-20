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
  state = {
    activeKey: 1,
    activeAutoKey: 1,
    activeEqualKey: 1,
  };

  updateActiveKey = (index) => {
    this.setState({
      activeKey: index,
    });
  };

  updateActiveAutoKey = (index) => {
    this.setState({
      activeAutoKey: index,
    });
  };
  updateActiveEqualKey = (index) => {
    this.setState({
      activeEqualKey: index,
    });
  };

  render() {
    return (
      <div>
        <h1 className="site-headline">Tabs</h1>

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
