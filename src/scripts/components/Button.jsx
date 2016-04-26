import React from 'react';
import classNames from 'classnames';

const Button = React.createClass({
  displayName: 'RhinoButton',

  propTypes: {
    classes:  React.PropTypes.string,
    click:    React.PropTypes.func,
    disabled: React.PropTypes.bool,
    iconOnly: React.PropTypes.bool,
    label:    React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.element]).isRequired,
    outline:  React.PropTypes.bool,
    size:     React.PropTypes.oneOf(['small', 'normal', 'large']),
    type:     React.PropTypes.oneOf(['default', 'primary', 'secondary', 'accent', 'link']),
  },

  getDefaultProps() {
    return {
      click:    () => {},
      disabled: false,
      iconOnly: false,
      outline:  false,
      size:     'normal',
      type:     'primary'
    };
  },

  render() {
    const { classes, click, disabled, iconOnly, label, outline, size, type, ...props } = this.props;
    const cx = classNames('btn', classes, {
      'btn--default':   (type==='default' && !outline),
      'btn--primary':   (type==='primary' && !outline),
      'btn--secondary': (type==='secondary' && !outline),
      'btn--accent':    (type==='accent' && !outline),
      'btn--link':      (type==='link' && !outline),
      'btn--default-outline':   (type==='default' && outline),
      'btn--primary-outline':   (type==='primary' && outline),
      'btn--secondary-outline': (type==='secondary' && outline),
      'btn--accent-outline':    (type==='accent' && outline),
      'btn--sm': size==='small',
      'btn--lg': size==='large',
      'btn--icon': iconOnly,
      'disabled': disabled
    });

    return (<a href="#" className={cx} onClick={click} {...props} role="button">{label}</a>);
  }
});

export default Button;
