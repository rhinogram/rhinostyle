import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

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
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['inbound', 'outbound']),
  type: PropTypes.oneOf(['default', 'primary', 'note']),
};

Message.defaultProps = {
  type: 'default',
};

export default Message;
