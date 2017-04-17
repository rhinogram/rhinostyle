import cx from 'classnames';
import React from 'react';

const NavTabsItem = (props) => {
  const { className, active, onClick } = props;
  const itemClasses = cx('nav-tabs__item', className, {
    active,
  });
  const linkClasses = cx('nav-tabs__item__link', className);

  return (
    <li className={itemClasses}>
      <div className={linkClasses} onClick={onClick}>
        {props.children}
      </div>
    </li>
  );
};

NavTabsItem.displayName = 'RhinoNavTabsItem';

NavTabsItem.propTypes = {
  active: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  onClick: React.PropTypes.func,
};

NavTabsItem.defaultProps = {
  active: false,
  onClick: () => {},
};

export default NavTabsItem;
