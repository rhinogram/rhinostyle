import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const DropdownMenuHeader = props => <div className={cx('dropdown__menu__header', props.className)}><span className="u-text-overflow">{props.label}</span></div>;

DropdownMenuHeader.displayName = 'RhinoDropdownMenuHeader';

DropdownMenuHeader.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default DropdownMenuHeader;
