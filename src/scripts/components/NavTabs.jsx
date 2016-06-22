import React        from 'react';
import NavTabsItem  from './NavTabsItem';
import cx           from 'classnames';

class NavTabs extends React.Component {
  static displayName = 'RhinoNavTabs';

  static propTypes = {
    activeKey:        React.PropTypes.number,
    children:         React.PropTypes.node,
    className:        React.PropTypes.string,
    justified:        React.PropTypes.string,
    select:           React.PropTypes.func,
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
    const { className, justified } = this.props;
    const classes = cx('nav-tabs', className, {
      'nav-tabs--justified-equal':    justified === 'equal',
      'nav-tabs--justified-auto':     justified === 'auto',
    });
    return (
      <ul className={classes}>
        {this.getChildren()}
      </ul>
    );
  }
}

export default NavTabs;
