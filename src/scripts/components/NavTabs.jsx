import React from 'react';
import NavTabsItem from './NavTabsItem';

class NavTabs extends React.Component {
  static displayName = 'RhinoTab';

  static propTypes = {
    active:          React.PropTypes.bool,
    activeKey:       React.PropTypes.number,
    children:        React.PropTypes.node,
    className:       React.PropTypes.string,
    select:          React.PropTypes.func,
  };

  static defaultProps = {
    active:     false,
  };

  state = {
    href: 1,
    select: (args) => {
      console.log('arguments of select in navTabs.jsx', args);
      // tried to re-render and / or run this.getChildren after changing props,
      // but failed..
      // this.render();
    },
  }

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;
    return React.Children.map(children, child => {
      if (child.type === NavTabsItem) {
        if (this.props.active) {
          returnChild = React.cloneElement(child, {
            click: () => {
              this.state.select(child.props.activeKey);
            },
            active: true,
          });
        } else {
          returnChild = React.cloneElement(child, {
            click: () => {
              this.state.activeKey = child.props.activeKey;
              this.state.href = child.props.href;
              this.state.select(child.props);
            },
          });
        }
      } else {
        returnChild = child;
      }
      return returnChild;
    });
  }

  render() {
    return (
      <ul className="nav-tabs">
        {this.getChildren()}
      </ul>
    );
  }
}

export default NavTabs;
