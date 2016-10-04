import React from 'react';
import cx    from 'classnames';
import { Link } from 'react-router';

class Button extends React.Component {
  static displayName = 'RhinoButton';

  static propTypes = {
    active:      React.PropTypes.bool,
    blankWindow: React.PropTypes.bool,
    block:       React.PropTypes.bool,
    children:    React.PropTypes.node,
    className:   React.PropTypes.string,
    onClick:     React.PropTypes.func,
    disabled:    React.PropTypes.bool,
    iconOnly:    React.PropTypes.bool,
    route:       React.PropTypes.string,
    size:        React.PropTypes.oneOf(['small', 'large']),
    type:        React.PropTypes.oneOf(['default', 'primary', 'secondary', 'outline-default', 'outline-primary', 'outline-reversed', 'link', 'danger']),
    url:         React.PropTypes.string,
  };

  static defaultProps = {
    active:   false,
    block:    false,
    disabled: false,
    iconOnly: false,
    onClick:  () => {},
    type:     'default',
  };

  handleClick = () => {
    if (this.props.url) {
      if (!this.props.blankWindow) {
        window.location = this.props.url;
      } else {
        window.open(this.props.url);
      }
    }

    if (this.props.onClick && typeof(this.props.onClick === 'function')) {
      this.props.onClick();
    }
  }

  render() {
    const { active, block, className, disabled, iconOnly, onClick, route, size, type } = this.props;
    const classes = cx('btn', className, {
      'btn--default':          type === 'default',
      'btn--primary':          type === 'primary',
      'btn--secondary':        type === 'secondary',
      'btn--link':             type === 'link',
      'btn--outline-default':  type === 'outline-default',
      'btn--outline-primary':  type === 'outline-primary',
      'btn--outline-reversed': type === 'outline-reversed',
      'btn--danger':           type === 'danger',
      'btn--sm':               size === 'small',
      'btn--lg':               size === 'large',
      'btn--block':            block,
      'btn--icon':             iconOnly,
      active,
      disabled,
    });

    let markup = '';

    if (route) {
      markup = (
        <Link to={route} className={classes} onClick={this.handleClick}>{this.props.children}</Link>
      );
    } else {
      markup = (
        <a href="javascript:void(0)" className={classes} onClick={this.handleClick}>{this.props.children}</a>
      );
    }

    return markup;
  }

}

export default Button;
