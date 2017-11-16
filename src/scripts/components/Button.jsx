import cx       from 'classnames';
import PropTypes from 'prop-types';
import React    from 'react';
import { Link } from 'react-router';

import { LoaderCircle, UtilitySystem } from '../components';

class Button extends React.Component {
  static displayName = 'RhinoButton';

  static propTypes = {
    active:      PropTypes.bool,
    block:       PropTypes.bool,
    children:    PropTypes.node,
    className:   PropTypes.string,
    onClick:     PropTypes.func,
    disabled:    PropTypes.bool,
    iconOnly:    PropTypes.bool,
    route:       PropTypes.string,
    size:        PropTypes.oneOf(['small', 'large']),
    title:       PropTypes.string,
    type:        PropTypes.oneOf(['default', 'primary', 'secondary', 'outline-primary', 'outline-reversed', 'link', 'danger']),
    url:         PropTypes.string,
    loading: PropTypes.bool,
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
    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick();
    }
  }

  /**
   * Render loading UI based on `loading` prop
   * @return {render}
   */
  loadingRender = () => {
    const loaderClass = `button__loader ${(this.props.type === 'outline-reversed') ? 'button__loader--contrast' : 'button__loader--default'}`;

    const loaderSize = this.props.size === 'small' ? 'xsmall' : 'small';
    const loaderType = ['outline-primary', 'link'].includes(this.props.type) ? 'primary' : 'default';

    return (
      <div className={loaderClass}><LoaderCircle type={loaderType} size={loaderSize} /></div>
    );
  }

  render() {
    const { active, block, className, disabled, iconOnly, onClick, route, size, title, type, url, loading, ...opts } = this.props; // eslint-disable-line
    const classes = cx('button', className, {
      'button--default': type === 'default',
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
      'button--link': type === 'link',
      'button--link-muted': type === 'link-muted',
      'button--outline-primary': type === 'outline-primary',
      'button--outline-reversed': type === 'outline-reversed',
      'button--danger': type === 'danger',
      'button--small': size === 'small',
      'button--large': size === 'large',
      'button--block': block,
      'button--icon': iconOnly,
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
        <button type="button" className={classes} disabled={disabled || loading} onClick={this.handleClick} aria-label={this.props.title} {...opts}>
          <span className="button__text-wrapper">{this.props.children}</span>
          {loading && this.loadingRender()}
        </button>
      );
    }

    return markup;
  }
}

export default Button;
