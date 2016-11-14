import React from 'react';
import cx    from 'classnames';

import { Close, Icon } from '../components';

const Alert = (props) => {
  const { className, dismissible, onDismiss, title, titleIcon, type } = props;
  const classes = cx('alert', className, {
    'alert--danger':      type === 'danger',
    'alert--default':     type === 'default',
    'alert--info':        type === 'info',
    'alert--success':     type === 'success',
    'alert--warning':     type === 'warning',
    'alert--dismissible': dismissible,
  });

  const renderClose = () => {
    if (dismissible) {
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
  onDismiss:    React.PropTypes.func.isRequired,
  title:        React.PropTypes.string,
  titleIcon:    React.PropTypes.string,
  type:         React.PropTypes.oneOf(['danger', 'default', 'info', 'success', 'warning']),
};

Alert.defaultProps = {
  dismissible: false,
  onDismiss:   () => {},
  titleIcon:   '',
  type:        'default',
};

export default Alert;
