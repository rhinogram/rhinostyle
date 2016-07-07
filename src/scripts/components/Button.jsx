import React from 'react';
import cx    from 'classnames';

const Button = (props) => {
  const { active, block, className, onClick, disabled, iconOnly, size, type, ...opts } = props;
  const classes = cx('btn', className, {
    'btn--default':         type === 'default',
    'btn--primary':         type === 'primary',
    'btn--secondary':       type === 'secondary',
    'btn--link':            type === 'link',
    'btn--default-outline': type === 'default-outline',
    'btn--primary-outline': type === 'primary-outline',
    'btn--danger':          type === 'danger',
    'btn--sm':              size === 'small',
    'btn--lg':              size === 'large',
    'btn--block':           block,
    'btn--icon':            iconOnly,
    'active':               active, //eslint-disable-line
    'disabled':             disabled, //eslint-disable-line
  });

  /* eslint no-script-url:0 */
  return (<a href="javascript:void(0)" className={classes} onClick={onClick} {...opts} role="button">{props.children}</a>);
};

Button.displayName = 'RhinoButton';

Button.propTypes = {
  active:    React.PropTypes.bool,
  block:     React.PropTypes.bool,
  children:  React.PropTypes.node,
  className: React.PropTypes.string,
  onClick:   React.PropTypes.func.isRequired,
  disabled:  React.PropTypes.bool,
  iconOnly:  React.PropTypes.bool,
  size:      React.PropTypes.oneOf(['small', 'large']),
  type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'default-outline', 'primary-outline', 'link', 'danger']),
};

Button.defaultProps = {
  active:   false,
  block:    false,
  onClick:  () => {},
  disabled: false,
  iconOnly: false,
  type:     'default',
};

export default Button;
