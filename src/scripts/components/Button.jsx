import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

import { LoaderCircle, UtilitySystem } from '.';

class Button extends React.Component {
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  /**
   * Render loading UI based on `loading` prop
   * @return {render}
   */
  loadingRender = () => {
    const loaderSize = this.props.size === 'small' ? 'xsmall' : 'small';

    return (
      <div className="button__loader"><LoaderCircle size={loaderSize} /></div>
    );
  }

  render() {
    const { active, block, className, disabled, iconOnly, avatarOnly, onClick, reset, route, size, title, type, url, loading, ...opts } = this.props;

    const buttonBaseClass = reset ? 'button--reset' : 'button';
    const buttonStyleClasses = reset ? {
      'u-text-medium': size === 'large', // Match font-size for large button
      'u-text-small': size === 'small', // Match font-size for small button
    } : {
      'button--default': type === 'default',
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
      'button--link': type === 'link',
      'button--link-muted': type === 'link-muted',
      'button--outline-primary': type === 'outline-primary',
      'button--outline-reversed': type === 'outline-reversed',
      'button--accent': type === 'accent',
      'button--input': type === 'input',
      'button--danger': type === 'danger',
      'button--small': size === 'small',
      'button--large': size === 'large',
      'button--block': block,
      'button--icon': iconOnly,
      'button--avatar': avatarOnly,
      'button--checkbox': type === 'checkbox',
      'button--checkbox-muted': type === 'checkbox-muted',
    };

    const classes = cx(buttonBaseClass, className, {
      ...buttonStyleClasses,
      [UtilitySystem.config.classes.active]: active,
      [UtilitySystem.config.classes.loading]: loading,
    });
    let markup = '';

    if (url) {
      markup = (
        <a href={url} className={classes} onClick={this.handleClick} {...opts} title={this.props.title}>
          <span className="button__text-wrapper">{this.props.children}</span>
        </a>
      );
    } else if (route) {
      markup = (
        <Link to={route} className={classes} onClick={this.handleClick} disabled={disabled || loading} {...opts} title={this.props.title}>
          <span className="button__text-wrapper">{this.props.children}</span>
          {loading && this.loadingRender()}
        </Link>
      );
    } else {
      markup = (
        <button type="button" className={classes} disabled={disabled || loading} onClick={this.handleClick} title={this.props.title} {...opts}>
          <span className="button__text-wrapper">{this.props.children}</span>
          {loading && this.loadingRender()}
        </button>
      );
    }

    return markup;
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  iconOnly: PropTypes.bool,
  avatarOnly: PropTypes.bool,
  reset: PropTypes.bool,
  route: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.string,
  type: PropTypes.oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-primary', 'outline-reversed', 'link', 'link-muted', 'danger', 'checkbox', 'checkbox-muted']),
  url: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
