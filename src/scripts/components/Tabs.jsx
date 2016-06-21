import React from 'react';
import NavTabs from './NavTabs';

class Tabs extends React.Component {
  static displayName = 'Tabs';

  static propTypes = {
    activeKey:        React.PropTypes.number,
    children:         React.PropTypes.node,
    select:           React.PropTypes.func,
  }

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, child => {
      if (child.type === NavTabs) {
        returnChild = React.cloneElement(child, {
          // attempting to set a *master* activeKey that could exist as a prop in Tabs
          // this could control which content is rendered based on what tab is selected
          activeKey: child.props.activeKey,
        });
      } else {
        returnChild = child;
      }
      return returnChild;
    });
  }


  render() {
    return (
      <div>
        {this.getChildren()}
      </div>
    );
  }
}

export default Tabs;
