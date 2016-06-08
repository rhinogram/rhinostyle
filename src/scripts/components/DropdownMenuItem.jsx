import React from 'react';

const DropdownMenuItem = (props) => <li className="dropdown__menu__item"><a href="javascript:void(0)">{props.children}</a></li>; /* eslint no-script-url:0 */

DropdownMenuItem.displayName = 'RhinoDropdownMenuItem';

DropdownMenuItem.propTypes = {
  children:  React.PropTypes.node,
};

export default DropdownMenuItem;
