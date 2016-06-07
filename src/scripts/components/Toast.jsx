import React      from 'react';
import classNames from 'classnames';

import Icon from './Icon';

class Toast extends React.Component {
  static displayName = 'RhinoToast';

  static propTypes = {
    body:      React.PropTypes.string.isRequired,
    icon:      React.PropTypes.string,
    onDismiss: React.PropTypes.func,
    type:      React.PropTypes.oneOf(['danger', 'default', 'secondary']),
  };

  static defaultProps = {
    icon:      '',
    onDismiss: () => {},
    type:      'default',
  };

  render() {
    const { body, icon, onDismiss, type } = this.props;
    const cx = classNames('toast', {
      'toast--danger':    type === 'danger',
      'toast--default':   type === 'default',
      'toast--secondary': type === 'secondary',
    });

    const renderIcon = () => {
      if (icon) {
        return (<Icon icon={icon} />);
      }
    }

    return (
      <div className={cx}>
        <button type="button" onClick={onDismiss} className="toast__close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {renderIcon()}
        {body}
      </div>
    );
  }
}

export default Toast;
