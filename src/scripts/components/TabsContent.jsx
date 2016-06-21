import React          from 'react';
import TabContentPane from './TabContentPane';

class TabsContent extends React.Component {
  static displayName = 'TabsContent';

  static propTypes = {
    activeKey:       React.PropTypes.number,
    children:        React.PropTypes.node,
  }

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, child => {
      if (child.type === TabContentPane) {
        returnChild = React.cloneElement(child, {
          active: child.props.id === this.props.activeKey,
        });
      } else {
        returnChild = child;
      }
      return returnChild;
    });
  }

  render() {
    return (
      <div className="tabs-content">{this.getChildren()}</div>
    );
  }
}

export default TabsContent;
