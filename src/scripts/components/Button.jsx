import React from 'react';
import cx    from 'classnames';

class Button extends React.Component {
  static displayName = 'RhinoButton';

  static propTypes = {
    active:    React.PropTypes.bool,
    block:     React.PropTypes.bool,
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    click:     React.PropTypes.func.isRequired,
    disabled:  React.PropTypes.bool,
    iconOnly:  React.PropTypes.bool,
    size:      React.PropTypes.oneOf(['small', 'large']),
    type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'default-outline', 'primary-outline', 'link', 'danger']),
  };

  static defaultProps = {
    active:   false,
    block:    false,
    click:    () => {},
    disabled: false,
    iconOnly: false,
    type:     'default',
  };

  render() {
    const { active, block, className, click, disabled, iconOnly, size, type, ...props } = this.props;
    const classes = cx('btn', className, {
      'btn--default':   type === 'default',
      'btn--primary':   type === 'primary',
      'btn--secondary': type === 'secondary',
      'btn--link':      type === 'link',
      'btn--default-outline':   type === 'default-outline',
      'btn--primary-outline':   type === 'primary-outline',
      'btn--danger':   type === 'danger',
      'btn--sm': size === 'small',
      'btn--lg': size === 'large',
      'btn--block': block,
      'btn--icon': iconOnly,
      'active': active, //eslint-disable-line
      'disabled': disabled, //eslint-disable-line
    });

    /* eslint no-script-url:0 */
    return (<a href="javascript:void(0)" className={classes} onClick={click} {...props} role="button">{this.props.children}</a>);
  }
}

export default Button;
