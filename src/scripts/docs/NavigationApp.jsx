import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { NavTabs, NavTabsItem } from '../components';
import { Live } from './components';
import NavTabsExample from './examples/NavTabs.example.txt';

const NavTabsDocs = {
  activeKey: 'Include active key',
  justified: "<code>oneOf(['auto', 'equal', 'none'])</code>", // eslint-disable-line single-quotes
  onSelect: 'On select of nav item',
};
const NavTabsScope  = {
  React,
  ReactDOM,
  NavTabs,
  NavTabsItem,
};

class NavigationApp extends React.Component {
  state = {
    activeKey: 1,
    activeStackedKey: 3,
    activeEqualKey: 1,
    activeAutoKey: 1,
  };

  updateActiveKey = (index) => {
    this.setState({
      activeKey: index,
    });
  };

  updateActiveStackedKey = (index) => {
    this.setState({
      activeStackedKey: index,
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
      <Fragment>
        <section className="site-section">
          <h3 className="site-subheadline">Navigation</h3>
          <p className="site-text-lead">Below you will find our set of navigation components. This page exists to demonstrate the UI of each - appearance, layout, animation, and active states.
           Some of these components may be used in conjunction with other components - see <a href="../tabs"> Tabs</a> for example.
          </p>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTabs Types</h3>
          <div className="u-m-b-large">
            <p className="site-copy"><code>type=&quot;default&quot;</code></p>
            <NavTabs activeKey={this.state.activeKey} onSelect={this.updateActiveKey}>
              <NavTabsItem id={1}>Code</NavTabsItem>
              <NavTabsItem id={2}>Issues</NavTabsItem>
              <NavTabsItem id={3}>Pull Requests</NavTabsItem>
            </NavTabs>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTabs Modifiers</h3>
          <div className="u-m-b-large">
            <h5 className="site-miniheadline">Justifed, Equal Width</h5>
            <p className="site-copy"><code>justified=&quot;equal&quot;</code></p>
            <NavTabs activeKey={this.state.activeEqualKey} onSelect={this.updateActiveEqualKey} justified="equal">
              <NavTabsItem id={1}>Code</NavTabsItem>
              <NavTabsItem id={2}>Issues</NavTabsItem>
              <NavTabsItem id={3}>Pull Requests</NavTabsItem>
            </NavTabs>
          </div>

          <div className="u-m-b-large">
            <h5 className="site-miniheadline">Justified, Auto Width</h5>
            <p className="site-copy"><code>justified=&quot;auto&quot;</code></p>
            <NavTabs activeKey={this.state.activeAutoKey} onSelect={this.updateActiveAutoKey} justified="auto">
              <NavTabsItem id={1}>Code</NavTabsItem>
              <NavTabsItem id={2}>Issues</NavTabsItem>
              <NavTabsItem id={3}>Pull Requests</NavTabsItem>
            </NavTabs>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTabs Helper Class</h3>
          <p className="site-copy">Use <code>.nav-tabs--stacked</code> helper/modifier class (with CSS media queries) when necessary to collapse tabs into stacked layout. This is particularly useful on small screens.</p>
          <div style={{ maxWidth: '32rem' }}>
            <NavTabs activeKey={this.state.activeStackedKey} onSelect={this.updateActiveStackedKey} className="nav-tabs--stacked">
              <NavTabsItem id={1}>Code</NavTabsItem>
              <NavTabsItem id={2}>Issues</NavTabsItem>
              <NavTabsItem id={3}>Pull Requests</NavTabsItem>
            </NavTabs>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">NavTabs Playground</h3>

          <Live
            code={NavTabsExample}
            scope={NavTabsScope}
            component={NavTabs}
            propDescriptions={NavTabsDocs}
          />
        </section>
      </Fragment>
    );
  }
}

ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));
