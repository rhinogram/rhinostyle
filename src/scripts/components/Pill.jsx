import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, Icon } from '.';

const Pill = (props) => {
  const { className, disabled, icon, hideClose, onClick, label, type, closeIconClassName, onCloseIconClick, id } = props;

  const pillClasses = cx('pill', className, {
    'pill--default': type === 'default',
    'pill--primary': type === 'primary',
    'pill--powder-blue': type === 'powder-blue',
  });

  const closeIconClasses = cx('pill__close', closeIconClassName);

  const handleCloseButtonClick = ($event) => {
    $event.stopPropagation();
    if (onCloseIconClick && id) {
      onCloseIconClick(id);
    }
  };

  return (
    <Button reset className={pillClasses} onClick={onClick} disabled={disabled}>
      {icon && (
        <Icon icon={icon} className="pill__icon" />
      )}
      {label}
      {(!disabled && !hideClose) && <Icon icon="close" className={closeIconClasses} onClick={handleCloseButtonClick} />}
    </Button>
  );
};

Pill.propTypes = {
  className: PropTypes.string,
  closeIconClassName: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  hideClose: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onCloseIconClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'primary', 'powder-blue']),
};

Pill.defaultProps = {
  onClick: () => {},
  type: 'default',
  hideClose: false,
};

export default Pill;
