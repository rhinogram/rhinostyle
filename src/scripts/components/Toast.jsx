import React      from 'react';
import classNames from 'classnames';

const Toast = React.createClass({
  displayName: 'RhinoToast',

  propTypes: {
    body:        React.PropTypes.string.isRequired,
    dismissable: React.PropTypes.bool,
    onDismiss:   React.PropTypes.func,
    type:        React.PropTypes.oneOf(['danger', 'default', 'secondary'])
  },

  render() {
    const { body, dismissable, onDismiss, type } = this.props;
    const cx = classNames('notify', {
      'notify--danger':    type==='danger',
      'notify--default':   type==='default',
      'notify--secondary': type==='secondary'
    });

    const showButton = (dismissable) => {
      if (dismissable) {
        return (<button type="button" onClick={onDismiss} className="notify__close" data-dismiss="notify" aria-label="Close"><span aria-hidden="true">&times;</span></button>);
      }
    };

    return (
      <div className={cx}>
        {showButton(dismissable)}
        {body}
      </div>
    );
  }
});

export default Toast;
