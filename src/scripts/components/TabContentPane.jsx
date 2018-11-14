import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '.';

const TabContentPane = (props) => {
  const { className, active } = props;

  const paneClasses = cx('tabs-content__pane', className, {
    [UtilitySystem.config.classes.active]: active,
  });

  return (
    <div className={paneClasses}>
      {props.children}
    </div>
  );
};

TabContentPane.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

TabContentPane.defaultProps = {
  active: false,
};

export default TabContentPane;
