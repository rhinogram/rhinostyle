import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const DropdownMenuHeader = (props) => <div className={cx('dropdown__menu__header', props.className)}>{props.label}</div>;

DropdownMenuHeader.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default DropdownMenuHeader;
