import React from 'react';
import cx    from 'classnames';

const DropdownMenuHeader = (props) => <li className={cx('dropdown__menu__header', props.className)}><span className="u-text-overflow">{props.label}</span></li>;

DropdownMenuHeader.displayName = 'RhinoDropdownMenuHeader';

DropdownMenuHeader.propTypes = {
  className: React.PropTypes.string,
  label:     React.PropTypes.string.isRequired,
};

export default DropdownMenuHeader;
