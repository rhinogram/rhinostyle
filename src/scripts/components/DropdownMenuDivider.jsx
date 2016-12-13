import React from 'react';

const DropdownMenuDivider = props => <div className="dropdown__menu__divider">{props.children}</div>;

DropdownMenuDivider.displayName = 'RhinoDropdownMenuDivider';

DropdownMenuDivider.propTypes = {
  children:  React.PropTypes.node,
};

export default DropdownMenuDivider;
