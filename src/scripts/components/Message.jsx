import cx    from 'classnames';
import React from 'react';

class Message extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    direction: React.PropTypes.oneOf(['inbound', 'outbound']),
    type: React.PropTypes.oneOf(['default', 'primary', 'note']),
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className, type, direction } = this.props;
    const classes = cx('msg', className, {
      'msg--default':  type === 'default',
      'msg--primary':  type === 'primary',
      'msg--note':     type === 'note',
      'msg--inbound':  direction === 'inbound',
      'msg--outbound': direction === 'outbound',
    });

    return (
      <div className={classes}>{this.props.children}</div>
    );
  }
}
export default Message;
