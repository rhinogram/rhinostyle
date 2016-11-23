import React        from 'react';
import cx           from 'classnames';
import NavTabsItem  from './NavTabsItem';

class NavTabs extends React.Component {
  static displayName = 'RhinoNavTabs';

  static propTypes = {
    activeKey:        React.PropTypes.number,
    children:         React.PropTypes.node,
    className:        React.PropTypes.string,
    justified:        React.PropTypes.oneOf(['auto', 'equal', 'none']),
    onSelect:         React.PropTypes.func,
  };

  static defaultProps = {
    justified:    'none',
  };

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, (child) => {
      if (child.type === NavTabsItem) {
        returnChild = React.cloneElement(child, {
          active: child.props.id === this.props.activeKey,
          onClick: () => this.props.onSelect(child.props.id),
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
      'nav-tabs--justified-auto':     justified === 'auto',
      'nav-tabs--justified-equal':    justified === 'equal',
      'nav-tabs--justified-none':     justified === 'none',
    });
    return (
      <ul className={classes}>
        {this.getChildren()}
      </ul>
    );
  }
}

export default NavTabs;
