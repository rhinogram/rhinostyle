import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import NavTabsItem from './NavTabsItem';

class NavTabs extends React.Component {
  getChildren = () => {
    let returnChild = null;
    const { children } = this.props;

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
      'nav-tabs--justified-auto': justified === 'auto',
      'nav-tabs--justified-equal': justified === 'equal',
      'nav-tabs--justified-none': justified === 'none',
    });

    return (
      <ul className={classes}>
        {this.getChildren()}
      </ul>
    );
  }
}

NavTabs.propTypes = {
  activeKey: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  justified: PropTypes.oneOf(['auto', 'equal', 'none']),
  onSelect: PropTypes.func,
};

NavTabs.defaultProps = {
  justified: 'none',
};

export default NavTabs;
