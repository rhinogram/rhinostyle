import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// This needs to be a proper component instead of a stateless function since a ref is commonly attached
// eslint-disable-next-line react/prefer-stateless-function
class Message extends React.Component {
  render() {
    const { children, className, type, direction } = this.props;

    const classes = cx('msg', className, {
      'msg--default': type === 'default',
      'msg--primary': type === 'primary',
      'msg--note': type === 'note',
      'msg--inbound': direction === 'inbound',
      'msg--outbound': direction === 'outbound',
    });

    return (
      <div className={classes}>{children}</div>
    );
  }
}

Message.displayName = 'RhinoMessage';

Message.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['inbound', 'outbound']),
  type: PropTypes.oneOf(['default', 'primary', 'note']),
};

Message.defaultProps = {
  type: 'default',
};

export default Message;
