import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close, Icon } from '.';

const Alert = (props) => {
  const { className, onDismiss, solid, title, titleIcon, type } = props;
  const classes = cx('alert', className, {
    'alert--danger': type === 'danger',
    'alert--default': type === 'default',
    'alert--info': type === 'info',
    'alert--success': type === 'success',
    'alert--warning': type === 'warning',
    'alert--dismissible': onDismiss,
    'alert--solid': solid,
  });

  const renderClose = () => {
    if (onDismiss) {
      return <Close onClick={onDismiss} className="alert__close" />;
    }

    return false;
  };

  const renderTitleIcon = () => {
    if (titleIcon) {
      return <Icon icon={titleIcon} className="alert__title__icon" />;
    }

    return false;
  };

  return (
    <div className={classes}>
      {renderClose()}
      {title && (
      <div className="alert__title">
        {renderTitleIcon()}
        <div className="alert__title__text">{title}</div>
      </div>
      )}
      <div className="alert__body">
        {props.children}
      </div>
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  onDismiss: PropTypes.func,
  title: PropTypes.string,
  titleIcon: PropTypes.string,
  children: PropTypes.node,
  solid: PropTypes.bool,
  type: PropTypes.oneOf(['danger', 'default', 'info', 'success', 'warning']),
};

Alert.defaultProps = {
  type: 'default',
};

export default Alert;
