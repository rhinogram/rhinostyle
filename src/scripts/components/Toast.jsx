import React from 'react';
import cx    from 'classnames';

import Icon from './Icon';

class Toast extends React.Component {
  static displayName = 'RhinoToast';

  static propTypes = {
    body:      React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    icon:      React.PropTypes.string,
    onDismiss: React.PropTypes.func.isRequired,
    type:      React.PropTypes.oneOf(['danger', 'default', 'secondary']),
  };

  static defaultProps = {
    icon:      '',
    onDismiss: () => {},
    type:      'default',
  };

  render() {
    const { body, className, icon, onDismiss, type } = this.props;
    const classes = cx('toast', className, {
      'toast--danger':    type === 'danger',
      'toast--default':   type === 'default',
      'toast--secondary': type === 'secondary',
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
        <button type="button" onClick={onDismiss} className="toast__close" data-dismiss="toast" aria-label="Close"><Icon icon="close" /></button>
      </div>
    );
  }
}

export default Toast;
