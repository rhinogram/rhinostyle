import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

// This needs to be a proper component because we reference refs in other portions of the app
class Toast extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { body, className, onDismiss, type, subText } = this.props;
    const classes = cx('toast', className, {
      'toast--danger': type === 'danger',
      'toast--default': type === 'default',
      'toast--success': type === 'success',
    });

    const renderIcon = () => {
      let icon;
      let bump = null;

      switch (type) {
        case 'danger':
          icon = 'alert-triangle';
          bump = 'up';
          break;
        case 'success':
          icon = 'checkmark';
          break;
        default:
          icon = 'info-circle';
          break;
      }

      return (
        <Icon icon={icon} bump={bump} className="toast__icon" />
      );
    };

    return (
      <div role="button" tabIndex={0} className={classes} onClick={onDismiss}>
        {renderIcon()}
        <div className="toast__text">
          {body}
          <p className="toast__info"> {subText}</p>
        </div>
        <Icon icon="close" size="small" className="toast__close" />
      </div>
    );
  }
}

Toast.propTypes = {
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  onDismiss: PropTypes.func,
  subText: PropTypes.string,
  type: PropTypes.oneOf(['danger', 'default', 'success']),
};

Toast.defaultProps = {
  onDismiss: () => {},
  type: 'default',
};

export default Toast;
