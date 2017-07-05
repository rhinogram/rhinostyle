import PropTypes from 'prop-types';
import React from 'react';

const DropdownMenuScroll = props => <div className="dropdown__menu__scroll">{props.children}</div>;

DropdownMenuScroll.displayName = 'RhinoDropdownMenuScroll';

DropdownMenuScroll.propTypes = {
  children: PropTypes.node,
};

export default DropdownMenuScroll;
