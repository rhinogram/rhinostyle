import React from 'react';
import cx    from 'classnames';

class Message extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    className:  React.PropTypes.string,
    type:       React.PropTypes.oneOf(['default', 'primary', 'secondary', 'note']),
    direction:  React.PropTypes.oneOf(['to', 'from']),
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className, type, direction } = this.props;

    const classes = cx('msg', className, {
      'msg--default':   type === 'default',
      'msg--primary':   type === 'primary',
      'msg--secondary': type === 'secondary',
      'msg--note':      type === 'note',
      'msg--to':        direction === 'to',
      'msg--from':      direction === 'from',

    });

    return (
      <span className={classes}>{this.props.children}</span>
    );
  }
}

export default Message;
