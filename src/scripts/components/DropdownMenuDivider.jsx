import React from 'react';

const DropdownMenuDivider = (props) => <li className="dropdown__menu__divider">{props.children}</li>;

DropdownMenuDivider.displayName = 'RhinoDropdownMenuDivider';

DropdownMenuDivider.propTypes = {
  children:  React.PropTypes.node,
};

export default DropdownMenuDivider;
