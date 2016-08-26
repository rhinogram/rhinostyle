import React from 'react';
import cx    from 'classnames';

const Message = (props) => {
  const { className, type, direction } = props;
  const classes = cx('msg', className, {
    'msg--default':  type === 'default',
    'msg--primary':  type === 'primary',
    'msg--note':     type === 'note',
    'msg--inbound':  direction === 'inbound',
    'msg--outbound': direction === 'outbound',
  });

  return (
    <span className={classes}>{props.children}</span>
  );
};

Message.displayName = 'RhinoMessage';

Message.propTypes = {
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
  direction: React.PropTypes.oneOf(['inbound', 'outbound']),
  type:      React.PropTypes.oneOf(['default', 'primary', 'note']),
};

Message.defaultProps = {
  type: 'default',
};

export default Message;
