import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

class Avatar extends React.Component {
  state = {
    imageError: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.image !== this.props.image) {
      this.setState({
        imageError: false,
      });
    }
  }

  handleImageError = () => {
    this.setState({ imageError: true });
  };

  getStatusColor(onlineStatus) {
    if (onlineStatus === 'online') {
      return 'u-bg-secondary';
    }
    if (onlineStatus === 'idle') {
      return 'u-bg-warning';
    }
    return 'u-bg-gray-light';
  }

  renderStatusIcon() {
    const { size, onlineStatus, className } = this.props;
    const classes = cx('avatar-status', {
      'avatar-status--header': className === 'app-header__avatar',
      'avatar-status--xsmall': size === 'xsmall',
      'avatar-status--small': size === 'small',
      'avatar-status--large': size === 'large',
      'avatar-status--xlarge': size === 'xlarge',
    });
    return (
      <div className={`${classes} ${this.getStatusColor(onlineStatus)}`} />
    );
  }

  renderAvatar() {
    const { className, image, size, type } = this.props;
    const name = this.props.name ? this.props.name.trim() : '';

    const classes = cx('avatar', className, {
      'avatar--xsmall': size === 'xsmall',
      'avatar--small': size === 'small',
      'avatar--large': size === 'large',
      'avatar--xlarge': size === 'xlarge',
      'avatar--default': type === 'default',
      'avatar--member': type === 'member',
    });
    const styles = {
      backgroundImage: `url(${image})`,
    };

    // If image exists, use image for background
    if (image && !this.state.imageError) {
      return (
        <figure className={classes} style={styles}>
          <img alt={name} onError={this.handleImageError} style={{ display: 'none' }} src={image} />
        </figure>
      );
    }

    // If no image and no name, use icon
    if (!image && !name) {
      return (
        <figure className={classes}>
          <Icon className="avatar__icon" icon="user" />
        </figure>
      );
    }

    let splitName = null;
    let initials = null;

    if (name) {
      splitName = name.split(' ');
      initials = splitName[0][0] + splitName[splitName.length - 1][0];
    }

    // https://stackoverflow.com/a/48841447/1026742
    // For text alignment
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={classes}>
        <circle cx="50" cy="50" r="50" />
        <text x="50" y="50" textAnchor="middle" dy="0.35em" fontSize="40">{initials}</text>
      </svg>
    );
  }

  render() {
    const { size, type, className, showOnlineStatus } = this.props;
    if (showOnlineStatus) {
      const sizeClasses = cx('avatar-status-container', {
        'avatar--xsmall': size === 'xsmall',
        'avatar--small': size === 'small',
        'avatar--large': size === 'large',
        'avatar--xlarge': size === 'xlarge',
        'avatar--default': type === 'default',
        'avatar--member': type === 'member',
      }, className);
      return (
        <div className={sizeClasses}>
          {this.renderAvatar()}
          {this.renderStatusIcon()}
        </div>
      );
    } return this.renderAvatar();
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'default', 'large', 'xlarge']),
  type: PropTypes.oneOf(['default', 'member']),
  showOnlineStatus: PropTypes.bool,
  onlineStatus: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'default',
  type: 'default',
};

export default Avatar;
