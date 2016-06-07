import React from 'react';
import cx    from 'classnames';

class Button extends React.Component {
  static displayName = 'RhinoButton';

  static propTypes = {
    block:     React.PropTypes.bool,
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    click:     React.PropTypes.func,
    disabled:  React.PropTypes.bool,
    iconOnly:  React.PropTypes.bool,
    outline:   React.PropTypes.bool,
    size:      React.PropTypes.oneOf(['small', 'normal', 'large']),
    type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'accent', 'link']),
  };

  static defaultProps = {
    block:    false,
    click:    () => {},
    disabled: false,
    iconOnly: false,
    outline:  false,
    size:     'normal',
    type:     'default',
  };

  render() {
    const { block, className, click, disabled, iconOnly, outline, size, type, ...props } = this.props;
    const classes = cx('btn', className, {
      'btn--default':   (type === 'default' && !outline),
      'btn--primary':   (type === 'primary' && !outline),
      'btn--secondary': (type === 'secondary' && !outline),
      'btn--accent':    (type === 'accent' && !outline),
      'btn--link':      (type === 'link' && !outline),
      'btn--default-outline':   (type === 'default' && outline),
      'btn--primary-outline':   (type === 'primary' && outline),
      'btn--secondary-outline': (type === 'secondary' && outline),
      'btn--accent-outline':    (type === 'accent' && outline),
      'btn--sm': size === 'small',
      'btn--lg': size === 'large',
      'btn--block': block,
      'btn--icon': iconOnly,
      'disabled': disabled, //eslint-disable-line
    });

    /* eslint no-script-url:0 */
    return (<a href="javascript:void(0)" className={classes} onClick={click} {...props} role="button">{this.props.children}</a>);
  }
}

export default Button;
