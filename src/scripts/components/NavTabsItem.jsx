import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../UtilitySystem';

const NavTabsItem = (props) => {
  const { className, active, onClick, dataFeatureTag } = props;
  const itemClasses = cx('nav-tabs__item', className, {
    [UtilitySystem.config.classes.active]: active,
  });
  const linkClasses = cx('nav-tabs__item__link', className);

  return (
    <li className={itemClasses}>
      <div className={linkClasses} onClick={onClick} data-feature-tag={dataFeatureTag}>
        {props.children}
      </div>
    </li>
  );
};

NavTabsItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  dataFeatureTag: PropTypes.string,
};

NavTabsItem.defaultProps = {
  active: false,
  onClick: () => {},
};

export default NavTabsItem;
