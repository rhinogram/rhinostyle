import React from 'react';
import NavTabsItem from './NavTabsItem';

class NavTabs extends React.Component {
  static displayName = 'RhinoTab';

  static propTypes = {
    activeKey:       React.PropTypes.number,
    children:        React.PropTypes.node,
    select:          React.PropTypes.func,
  };

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, child => {
      if (child.type === NavTabsItem) {
        returnChild = React.cloneElement(child, {
          active: child.props.id === this.props.activeKey,
          click: () => this.props.select(child.props.id),
        });
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
