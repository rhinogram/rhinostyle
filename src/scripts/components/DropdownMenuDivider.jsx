import PropTypes from 'prop-types';
import React from 'react';

const DropdownMenuDivider = props => <div className="dropdown__menu__divider">{props.children}</div>;

DropdownMenuDivider.propTypes = {
  children: PropTypes.node,
};

export default DropdownMenuDivider;
