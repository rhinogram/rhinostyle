import React      from 'react';
import classNames from 'classnames';

const Toast = React.createClass({
  displayName: 'RhinoToast',

  propTypes: {
    body: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['danger', 'default', 'secondary'])
  },

  getDefaultProps() {
    return {
      type: 'default'
    };
  },

  render() {
    const { body, type } = this.props;
    const cx = classNames('notify', {
      'notify--danger':    type==='danger',
      'notify--default':   type==='default',
      'notify--secondary': type==='secondary'
    });

    return (
      <div className={cx}>
        <button type="button" className="notify__close" data-dismiss="notify" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {body}
      </div>
    );
  }
});

export default Toast;
