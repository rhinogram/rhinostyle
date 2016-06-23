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

  state = {
    activeKey: 1,
    activeEqualKey: 1,
    activeAutoKey: 1,
  };

  updateActiveKey = (index) => {
    this.setState({
      activeKey: index,
    });
  };

  updateActiveEqualKey = (index) => {
    this.setState({
      activeEqualKey: index,
    });
  };

  updateActiveAutoKey = (index) => {
    this.setState({
      activeAutoKey: index,
    });
  };

  render() {
    return (
      <div>
        <h1 className="site-headline">Navigation</h1>

        <section className="site-section">
          <h3 className="site-subheadline">NavTab Types</h3>
          <div className="u-m-b-md">
            <p className="site-copy"><code>type="default"</code></p>
            <NavTabs activeKey={this.state.activeKey} select={this.updateActiveKey}>
              <NavTabsItem id={1}>Tab One</NavTabsItem>
              <NavTabsItem id={2}>Tab Two</NavTabsItem>
              <NavTabsItem id={3}>Tab Three</NavTabsItem>
            </NavTabs>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTab Modifiers</h3>

          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Justifed, Equal Width</h5>
            <p className="site-copy"><code>justified="equal"</code></p>
            <NavTabs activeKey={this.state.activeEqualKey} select={this.updateActiveEqualKey} justified="equal">
              <NavTabsItem id={1}>Tab One</NavTabsItem>
              <NavTabsItem id={2}>Tab Two</NavTabsItem>
              <NavTabsItem id={3}>Tab Three</NavTabsItem>
            </NavTabs>
          </div>

          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Justified, Auto Width</h5>
            <p className="site-copy"><code>justified="auto"</code></p>
            <NavTabs activeKey={this.state.activeAutoKey} select={this.updateActiveAutoKey} justified="auto">
              <NavTabsItem id={1}>Tab One - With a Really Long Title</NavTabsItem>
              <NavTabsItem id={2}>Tab Two</NavTabsItem>
              <NavTabsItem id={3}>Tab Three</NavTabsItem>
            </NavTabs>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTab Playground</h3>
          <Playground codeText={navigationExample} scope={exampleScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));
