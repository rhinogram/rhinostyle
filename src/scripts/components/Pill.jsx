import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, Icon } from '.';

const Pill = (props) => {
  const { className, disabled, icon, hideClose, onClick, label, type, closeIconClassName, onCloseIconClick } = props;

  const pillClasses = cx('pill', className, {
    'pill--default': type === 'default',
    'pill--primary': type === 'primary',
    'pill--powder-blue': type === 'powder-blue',
  });

  const closeIconClasses = cx('pill__close', closeIconClassName);

  return (
    <Button reset className={pillClasses} onClick={onClick} disabled={disabled}>
      {icon && (
        <Icon icon={icon} className="pill__icon" />
      )}
      {label}
      {(!disabled && !hideClose) && <Icon icon="close" className={closeIconClasses} onClick={() => onCloseIconClick(label)} />}
    </Button>
  );
};

Pill.propTypes = {
  className: PropTypes.string,
  closeIconClassName: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  hideClose: PropTypes.bool,
  onClick: PropTypes.func,
  onCloseIconClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'primary', 'powder-blue']),
};

Pill.defaultProps = {
  onClick: () => {},
  onCloseIconClick: () => {},
  type: 'default',
  hideClose: false,
};

export default Pill;
