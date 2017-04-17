import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close, Icon } from '../components';

const Alert = (props) => {
  const { className, onDismiss, title, titleIcon, size, type } = props;
  const classes = cx('alert', className, {
    'alert--sm':                size === 'small',
    'alert--danger':            type === 'danger',
    'alert--default':           type === 'default',
    'alert--info':              type === 'info',
    'alert--success':           type === 'success',
    'alert--warning':           type === 'warning',
    'alert--dismissible':       onDismiss,
  });

  const renderClose = () => {
    if (onDismiss) {
      return (<Close onClick={onDismiss} className="alert__close" />);
    }
    return false;
  };

  const renderTitleIcon = () => {
    if (titleIcon) {
      return (<Icon icon={titleIcon} className="alert__title__icon" />);
    }
    return false;
  };

  return (
    <div className={classes}>
      {renderClose()}
      <div className="alert__title">
        {renderTitleIcon()}
        <div className="alert__title__text">{title}</div>
      </div>
      <div className="alert__body">
        {props.children}
      </div>
    </div>
  );
};

Alert.displayName = 'RhinoAlert';

Alert.propTypes = {
  className:    PropTypes.string,
  dismissible:  PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  onDismiss:    PropTypes.func,
  size:         PropTypes.oneOf(['small']),
  title:        PropTypes.string,
  titleIcon:    PropTypes.string,
  children:     PropTypes.node,
  type:         PropTypes.oneOf(['danger', 'default', 'info', 'success', 'warning']),
};

Alert.defaultProps = {
  className: '',
  dismissible: false,
  onDismiss:   null,
  titleIcon:   '',
  type:        'default',
};

export default Alert;
