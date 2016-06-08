import React from 'react';

const DropdownMenuHeader = (props) => <li className="dropdown__menu__header">{props.children}</li>;

DropdownMenuHeader.displayName = 'RhinoDropdownMenuHeader';

DropdownMenuHeader.propTypes = {
  children:  React.PropTypes.node,
};

export default DropdownMenuHeader;
