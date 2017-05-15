import cx from 'classnames';
import React from 'react';

import { Close, Icon } from '../components';

class Toast extends React.Component {
  static displayName = 'RhinoToast';

  static propTypes = {
    body: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onDismiss: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['danger', 'default', 'success']),
  };

  static defaultProps = {
    icon:      '',
    onDismiss: () => {},
    type:      'default',
  };

  render() {
    const { body, className, icon, onDismiss, type } = this.props;
    const classes = cx('toast', className, {
      'toast--danger':  type === 'danger',
      'toast--default': type === 'default',
      'toast--success': type === 'success',
    });

    const renderIcon = () => {
      if (icon) {
        return (<Icon icon={icon} className="toast__icon" />);
      }

      return false;
    };

    return (
      <div className={classes}>
        {renderIcon()}
        <div className="toast__text">
          {body}
        </div>
        <Close onClick={onDismiss} className="toast__close" />
      </div>
    );
  }
}

export default Toast;
