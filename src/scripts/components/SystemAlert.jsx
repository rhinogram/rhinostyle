import React from 'react';
import cx    from 'classnames';

import { Close, Icon } from '../components';

const SystemAlert = (props) => {
  const { body, className, icon, onDismiss, type, url, urlText } = props;
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
    const text = urlText || 'More Information';

    if (url) {
      return <a href={url} className="system-alert__link" target="_blank" rel="noopener noreferrer">{text}</a>;
    }
    return false;
  };

  return (
    <div className={classes}>
      <div className="system-alert__body">
        {renderIcon()}
        {body}
        {renderUrl()}
      </div>
      <Close onClick={onDismiss} className="system-alert__close" />
    </div>
  );
};

SystemAlert.displayName = 'RhinoSystemAlert';

SystemAlert.propTypes = {
  body:      React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  icon:      React.PropTypes.string,
  onDismiss: React.PropTypes.func.isRequired,
  type:      React.PropTypes.oneOf(['danger', 'default', 'info', 'success']),
  url:       React.PropTypes.string,
  urlText:   React.PropTypes.string,
};

SystemAlert.defaultProps = {
  className: null,
  icon:      '',
  onDismiss: () => {},
  type:      'default',
  url:       '',
  urlText:   null,
};

export default SystemAlert;
