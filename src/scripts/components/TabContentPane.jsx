import React  from 'react';
import cx     from 'classnames';

const TabContentPane = (props) => {
  const { className, active } = props;

  const paneClasses = cx('tabs-content__pane', className, {
    'active': active, //eslint-disable-line
  });

  return (
    <div className={paneClasses}>
      {props.children}
    </div>
  );
};

TabContentPane.displayName = 'RhinoTabContentPane';

TabContentPane.propTypes = {
  active:           React.PropTypes.bool,
  className:        React.PropTypes.string,
  children:         React.PropTypes.node,
};

TabContentPane.defaultProps = {
  active: false,
};

export default TabContentPane;
