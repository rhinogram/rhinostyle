import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Close, Icon } from '../components';

const SystemAlert = (props) => {
  const { body, children, className, closable, icon, onDismiss, type, url, urlText } = props;
  const classes = cx('system-alert', className, {
    'system-alert--danger': type === 'danger',
    'system-alert--default': type === 'default',
    'system-alert--info': type === 'info',
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
      return <a href={url} className="system-alert__link" target="_blank" rel="noopener noreferrer">{urlText}</a>;
    }
    return false;
  };

  const renderBody = () => {
    let content = body;

    if (children) content = children;

    return content;
  };

  const renderClose = () => {
    let markup = '';

    if (closable) markup = <Close onClick={onDismiss} className="system-alert__close" />;

    return markup;
  };

  return (
    <div className={classes}>
      <div className="system-alert__body">
        {renderIcon()}
        {renderBody()}
        {renderUrl()}
      </div>
      {renderClose()}
    </div>
  );
};

SystemAlert.displayName = 'RhinoSystemAlert';

SystemAlert.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  closable: PropTypes.bool,
  icon: PropTypes.string,
  onDismiss: PropTypes.func,
  type: PropTypes.oneOf(['danger', 'default', 'info', 'success']),
  url: PropTypes.string,
  urlText: PropTypes.string,
};

SystemAlert.defaultProps = {
  closable: true,
  onDismiss: () => {},
  type: 'default',
  urlText: 'More Information',
};

export default SystemAlert;
