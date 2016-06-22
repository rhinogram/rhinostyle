import React    from 'react';
import ReactDOM from 'react-dom';

import { NavTabs, NavTabsItem } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const navigationExample = require('raw!./examples/Navigation.example.txt');
const exampleScope  = {
  React,
  ReactDOM,
  NavTabs,
  NavTabsItem,
};
class NavigationApp extends React.Component {
  render() {
    return (
      <div>
        <h1 className="site-headline">Navigation</h1>

        {/* <section className="site-section">
          <h3 className="site-subheadline">Tab Types</h3>
          <div className="u-m-b-md">
            <p className="site-copy"><code>type="default"</code></p>
            <h5 className="site-miniheadline">Default Tabs</h5>
            <p className="site-copy">Default Tabs require a <code>Tabs</code> wrapper with <code>NavTabs</code> and <code>TabsContent</code> as children</p>
            <Tabs activeKey={this.state.activeKey} select={this.updateActiveKey}>
              <NavTabs>
                <NavTabsItem id={1}>Tab One</NavTabsItem>
                <NavTabsItem id={2}>Tab Two</NavTabsItem>
                <NavTabsItem id={3}>Tab Three</NavTabsItem>
              </NavTabs>
              <TabsContent>
                <TabContentPane id={1}>Content for Tab One</TabContentPane>
                <TabContentPane id={2}>Content for Tab Two</TabContentPane>
                <TabContentPane id={3}>Content for Tab Three</TabContentPane>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Tab Modifiers</h3>

          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Justifed, Equal Width Tabs</h5>
            <p className="site-copy">Add <code>nav-tabs--justified-equal</code> class to <code>nav-tabs</code>. Each tab item will have equal width.</p>
            <Tabs activeKey={this.state.activeEqualKey} select={this.updateActiveEqualKey}>
              <NavTabs justified="equal">
                <NavTabsItem id={1}>Tab One</NavTabsItem>
                <NavTabsItem id={2}>Tab Two</NavTabsItem>
                <NavTabsItem id={3}>Tab Three</NavTabsItem>
              </NavTabs>
              <TabsContent>
                <TabContentPane id={1}>Content for Tab One of Equal Width Tabs</TabContentPane>
                <TabContentPane id={2}>Content for Tab Two of Equal Width Tabs</TabContentPane>
                <TabContentPane id={3}>Content for Tab Three of Equal Width Tabs</TabContentPane>
              </TabsContent>
            </Tabs>
          </div>

          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Justified, Auto Width Tabs</h5>
            <p className="site-copy">Add <code>nav-tabs--justified-auto</code> class to <code>nav-tabs</code>. Each tab item will have automatically determined width based on content.</p>
            <Tabs activeKey={this.state.activeAutoKey} select={this.updateActiveAutoKey}>
              <NavTabs justified="auto">
                <NavTabsItem id={1}>Tab One - With a Really Long Title</NavTabsItem>
                <NavTabsItem id={2}>Tab Two</NavTabsItem>
                <NavTabsItem id={3}>Tab Three</NavTabsItem>
              </NavTabs>
              <TabsContent>
                <TabContentPane id={1}>Content for Tab One of Auto Width Tabs</TabContentPane>
                <TabContentPane id={2}>Content for Tab Two of Auto Width Tabs</TabContentPane>
                <TabContentPane id={3}>Content for Tab Three of Auto Width Tabs</TabContentPane>
              </TabsContent>
            </Tabs>
          </div>
        </section> */}

        <section className="site-section">
          <h3 className="site-subheadline">Nav Tabs Playground</h3>
          <Playground codeText={navigationExample} scope={exampleScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));
