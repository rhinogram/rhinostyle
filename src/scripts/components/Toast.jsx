import React      from 'react';
import classNames from 'classnames';
import GSAP       from 'react-gsap-enhancer';
import TweenMax   from 'gsap';

class Toast extends React.Component {
  static displayName = 'RhinoToast';

  static propTypes = {
    body:        React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]).isRequired,
    onDismiss:   React.PropTypes.func,
    type:        React.PropTypes.oneOf(['danger', 'default', 'secondary'])
  };

  static defaultProps = {
    onDismiss: () => {},
    type:      'default'
  };

  render() {
    const { body, onDismiss, type } = this.props;
    const cx = classNames('toast', {
      'toast--danger':    type==='danger',
      'toast--default':   type==='default',
      'toast--secondary': type==='secondary'
    });

    return (
      <div className={cx}>
        <button type="button" onClick={onDismiss} className="toast__close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {body}
      </div>
    );
  }
}

export default GSAP()(Toast);
