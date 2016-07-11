import React    from 'react';
import ReactDOM from 'react-dom';

import { NavTabs, NavTabsItem } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const navTabsExample = require('raw!./examples/NavTabs.example.txt');
const navTabsDocs = {
  activeKey: '[Optional] - Include active key',
  className: '[Optional] - Include additional class name(s)',
  justified: '[Optional] - Justified type -  [auto | equal]',
  select: '[Optional] - Include select function',
};
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
          <h3 className="site-subheadline">About Navigation</h3>
          <p className="site-text-lead">Below you will find our set of navigation components. This page exists to demonstrate the UI of each - appearance, layout, animation, and active states.
           Some of these components may be used in conjunction with other components - see <a href="../tabs"> Tabs</a> for example.</p>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTabs Types</h3>
          <div className="u-m-b-md">
            <p className="site-copy"><code>type="default"</code></p>
            <NavTabs activeKey={this.state.activeKey} onSelect={this.updateActiveKey}>
              <NavTabsItem id={1}>Tab One</NavTabsItem>
              <NavTabsItem id={2}>Tab Two</NavTabsItem>
              <NavTabsItem id={3}>Tab Three</NavTabsItem>
            </NavTabs>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTabs Modifiers</h3>

          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Justifed, Equal Width</h5>
            <p className="site-copy"><code>justified="equal"</code></p>
            <NavTabs activeKey={this.state.activeEqualKey} onSelect={this.updateActiveEqualKey} justified="equal">
              <NavTabsItem id={1}>Tab One</NavTabsItem>
              <NavTabsItem id={2}>Tab Two</NavTabsItem>
              <NavTabsItem id={3}>Tab Three</NavTabsItem>
            </NavTabs>
          </div>

          <div className="u-m-b-md">
            <h5 className="site-miniheadline">Justified, Auto Width</h5>
            <p className="site-copy"><code>justified="auto"</code></p>
            <NavTabs activeKey={this.state.activeAutoKey} onSelect={this.updateActiveAutoKey} justified="auto">
              <NavTabsItem id={1}>Tab One - With a Really Long Title</NavTabsItem>
              <NavTabsItem id={2}>Tab Two</NavTabsItem>
              <NavTabsItem id={3}>Tab Three</NavTabsItem>
            </NavTabs>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTabs Playground</h3>
          <Playground docClass={NavTabs} propDescriptionMap={navTabsDocs} codeText={navTabsExample} scope={exampleScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));
