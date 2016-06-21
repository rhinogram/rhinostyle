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
class NavigationApp extends React.Component {
  state = {
    activeKey: 1,
  };

  updateActiveKey = (index) => {
    this.setState({
      activeKey: index,
    });
  };

  render() {
    return (
      <div>
        <Tabs activeKey={this.state.activeKey} select={this.updateActiveKey}>
          <NavTabs>
            <NavTabsItem id={1}>Tab One</NavTabsItem>
            <NavTabsItem id={2}>Tab Two</NavTabsItem>
            <NavTabsItem id={3}>Tab Three</NavTabsItem>
          </NavTabs>
          <TabsContent>
            <TabContentPane id={1}>Content 1 </TabContentPane>
            <TabContentPane id={2}>Content 2</TabContentPane>
            <TabContentPane id={3}>Content 3</TabContentPane>
          </TabsContent>
        </Tabs>
        <div>
          <section className="site-section">
            <h3 className="site-subheadline">Tab Types</h3>
            <Playground codeText={navigationExample} scope={exampleScope} noRender={false} />
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));


// const NavigationApp = () =>
  // <div>
  //   <section className="site-section">
  //     <h3 className="site-subheadline">Tab Types</h3>
  //     <Playground codeText={navigationExample} scope={exampleScope} noRender={false} />
  //   </section>
  // </div>;
//
// ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));
