import cx     from 'classnames';
import React  from 'react';

import { UtilitySystem } from '../components';

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

TabContentPane.displayName = 'RhinoTabContentPane';

TabContentPane.propTypes = {
  active: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

TabContentPane.defaultProps = {
  active: false,
};

export default TabContentPane;
