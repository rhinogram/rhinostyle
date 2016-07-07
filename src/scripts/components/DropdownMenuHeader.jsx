import React from 'react';
import cx    from 'classnames';

const DropdownMenuHeader = (props) => <li className={cx('dropdown__menu__header', props.className)}>{props.children}</li>;

DropdownMenuHeader.displayName = 'RhinoDropdownMenuHeader';

DropdownMenuHeader.propTypes = {
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
};

export default DropdownMenuHeader;
