import React from 'react';
import cx    from 'classnames';

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
    'alert--outline-danger':    type === 'outline-danger',
    'alert--outline-default':   type === 'outline-default',
    'alert--outline-info':      type === 'outline-info',
    'alert--outline-success':   type === 'outline-success',
    'alert--outline-warning':   type === 'outline-warning',
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
  className:    React.PropTypes.string,
  dismissible:  React.PropTypes.bool,
  onDismiss:    React.PropTypes.func,
  size:         React.PropTypes.oneOf(['small']),
  title:        React.PropTypes.string,
  titleIcon:    React.PropTypes.string,
  children:     React.PropTypes.node,
  type:         React.PropTypes.oneOf(['danger', 'default', 'info', 'success', 'warning', 'outline-danger', 'outline-default', 'outline-info', 'outline-success', 'outline-warning']),
};

Alert.defaultProps = {
  className: '',
  dismissible: false,
  onDismiss:   null,
  titleIcon:   '',
  type:        'default',
};

export default Alert;
