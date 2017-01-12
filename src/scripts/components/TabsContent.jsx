import React          from 'react';
import cx             from 'classnames';
import TabContentPane from './TabContentPane';

class TabsContent extends React.Component {
  static displayName = 'TabsContent';

  static propTypes = {
    activeKey: React.PropTypes.number,
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
  }

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, (child) => {
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
    const { className } = this.props;
    const classes = cx('tabs-content', className);
    return (
      <div className={classes}>{this.getChildren()}</div>
    );
  }
}

export default TabsContent;
