import cx       from 'classnames';
import PropTypes from 'prop-types';
import React    from 'react';
import { Link } from 'react-router';

class Button extends React.Component {
  static displayName = 'RhinoButton';

  static propTypes = {
    active:      PropTypes.bool,
    blankWindow: PropTypes.bool,
    block:       PropTypes.bool,
    children:    PropTypes.node,
    className:   PropTypes.string,
    onClick:     PropTypes.func,
    disabled:    PropTypes.bool,
    iconOnly:    PropTypes.bool,
    route:       PropTypes.string,
    size:        PropTypes.oneOf(['small', 'large']),
    title:       PropTypes.string,
    type:        PropTypes.oneOf(['default', 'primary', 'secondary', 'outline-default', 'outline-primary', 'outline-reversed', 'link', 'danger']),
    url:         PropTypes.string,
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

    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick();
    }
  }

  render() {
    const { active, blankWindow, block, className, disabled, iconOnly, onClick, route, size, title, type, url, ...opts } = this.props; // eslint-disable-line
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
        <Link to={route} className={classes} onClick={this.handleClick} {...opts} title={this.props.title}>{this.props.children}</Link>
      );
    } else {
      markup = (
        <a href="javascript:void(0)" className={classes} onClick={this.handleClick} title={this.props.title} {...opts}>{this.props.children}</a>
      );
    }

    return markup;
  }

}

export default Button;
