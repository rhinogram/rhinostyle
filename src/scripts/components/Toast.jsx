import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close, Icon } from '../components';

class Toast extends React.Component {
  static displayName = 'RhinoToast';

  static propTypes = {
    body: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.string,
    onDismiss: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['danger', 'default', 'success']),
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
        {body}
        <Close onClick={onDismiss} className="toast__close" />
      </div>
    );
  }
}

export default Toast;
