import React from 'react';
import cx    from 'classnames';

import Icon from './Icon';

const Toast = (props) => {
  const { body, className, icon, onDismiss, type } = props;
  const classes = cx('toast', className, {
    'toast--danger':    type === 'danger',
    'toast--default':   type === 'default',
    'toast--secondary': type === 'secondary',
  });

  const renderIcon = () => {
    if (icon) {
      return <Icon icon={icon} className="toast__icon" />;
    }
    return false;
  };

  return (
    <div className={classes}>
      {renderIcon()}
      {body}
      <button type="button" onClick={onDismiss} className="toast__close" data-dismiss="toast" aria-label="Close"><Icon icon="close" /></button>
    </div>
  );
};

Toast.displayName = 'RhinoToast';

Toast.propTypes = {
  body:      React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  icon:      React.PropTypes.string,
  onDismiss: React.PropTypes.func.isRequired,
  type:      React.PropTypes.oneOf(['danger', 'default', 'secondary']),
};

Toast.defaultProps = {
  icon:      '',
  onDismiss: () => {},
  type:      'default',
};

export default Toast;
