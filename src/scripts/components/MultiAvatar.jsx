import PropTypes from 'prop-types';
import React from 'react';

class MultiAvatar extends React.Component {
  renderInitials(initials) {
    return (
      <text x="50" y="50" textAnchor="middle" dy="0.35em" fontSize="30">{initials}</text>
    );
  }

  formatInitials(name) {
    splitName = name.split(' ');
    return splitName[0][0] + splitName[splitName.length - 1][0];
  }

  renderAvatars() {
    const { foregroundImageUrl, backgroundImageUrl, foregroundName, backgroundName, } = this.props;

    foregroundInitials = this.formatInitials(foregroundName);
    backgroundInitials = this.formatInitials(backgroundName);

    const firstUserProfileImageUrl = images[0];
    const secondUserProfileImageUrl = images[1];

    return (
      <div className="multi-avatars">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="avatar avatar--member multi-avatars__background-avatar"
          style={firstUserProfileImageUrl ? { backgroundImage: `url(${firstUserProfileImageUrl})` } : {}}
        >
          {firstUserProfileImageUrl === '' && this.renderInitials(backgroundInitials)}
        </svg>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="avatar avatar--member multi-avatars__foreground-avatar"
          style={secondUserProfileImageUrl ? { backgroundImage: `url(${secondUserProfileImageUrl})` } : {}}
        >
          {secondUserProfileImageUrl === '' && this.renderInitials(foregroundInitials)}
        </svg>
      </div>
    );
  }

  render() {
    return this.renderAvatars();
  }
}

MultiAvatar.propTypes = {
  foregroundImageUrl: PropTypes.string,
  backgroundImageUrl: PropTypes.string,
  foregroundName: PropTypes.string,
  backgroundName: PropTypes.string,
};

export default MultiAvatar;
