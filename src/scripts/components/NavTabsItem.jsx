import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../components';

const NavTabsItem = (props) => {
  const { className, active, onClick } = props;
  const itemClasses = cx('nav-tabs__item', className, {
    [UtilitySystem.config.classes.active]: active,
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
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

NavTabsItem.defaultProps = {
  active: false,
  onClick: () => {},
};

export default NavTabsItem;
