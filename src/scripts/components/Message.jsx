import React from 'react';
import cx    from 'classnames';

class Message extends React.Component {
  static displayName = 'RhinoMessage';

  static propTypes = {
    className: React.PropTypes.string,
    message: React.PropTypes.string,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className, message, type } = this.props;

    const classes = cx('message', className, {
      'message--default':   type === 'default',
      'message--primary':   type === 'primary',
      'message--secondary': type === 'secondary',
      'message--note':      type === 'note',
    });

    return (
      <span className={classes}>{message}</span>
    );
  }
}

export default Message;
