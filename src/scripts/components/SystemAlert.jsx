import React from 'react';
import cx    from 'classnames';

import Icon from './Icon';

class SystemAlert extends React.Component {
  static displayName: 'RhinoSystemAlert';

  static propTypes = {
    body:      React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    icon:      React.PropTypes.string,
    onDismiss: React.PropTypes.func.isRequired,
    type:      React.PropTypes.oneOf(['danger', 'default', 'info', 'success']),
    url:       React.PropTypes.string,
  };

  static defaultProps = {
    icon:      '',
    onDismiss: () => {},
    type:      'default',
    url:       '',
  };

  render() {
    const { body, className, icon, onDismiss, type, url } = this.props;
    const classes = cx('system-alert', className, {
      'system-alert--danger':  type === 'danger',
      'system-alert--default': type === 'default',
      'system-alert--info':    type === 'info',
      'system-alert--success': type === 'success',
    });

    const renderIcon = () => {
      if (icon) {
        return (<Icon icon={icon} className="system-alert__icon" />);
      }
      return false;
    };

    const renderUrl = () => {
      if (url) {
        return (<a href={url} className="system-alert__link" target="_blank">More Information</a>);
      }
      return false;
    };

    return (
      <div className={classes}>
        <button type="button" onClick={onDismiss} className="system-alert__close"><span>&times;</span></button>
        {renderIcon()}
        {body}
        {renderUrl()}
      </div>
    );
  }
}

export default SystemAlert;
