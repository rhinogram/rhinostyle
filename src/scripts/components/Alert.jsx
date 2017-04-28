import cx from 'classnames';
import React from 'react';

import { Close, Icon } from '../components';

const Alert = (props) => {
  const { className, onDismiss, title, titleIcon, size, type } = props;
  const classes = cx('alert', className, {
    'alert--small':                size === 'small',
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
      {title ? <div className="alert__title">
        {renderTitleIcon()}
        <div className="alert__title__text">{title}</div>
      </div> : null }
      <div className="alert__body">
        {props.children}
      </div>
    </div>
  );
};

Alert.displayName = 'RhinoAlert';

Alert.propTypes = {
  className:    React.PropTypes.string,
  dismissible:  React.PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  onDismiss:    React.PropTypes.func,
  size:         React.PropTypes.oneOf(['small']),
  title:        React.PropTypes.string,
  titleIcon:    React.PropTypes.string,
  children:     React.PropTypes.node,
  type:         React.PropTypes.oneOf(['danger', 'default', 'info', 'success', 'warning']),
};

Alert.defaultProps = {
  className: '',
  dismissible: false,
  onDismiss:   null,
  titleIcon:   '',
  type:        'default',
};

export default Alert;
