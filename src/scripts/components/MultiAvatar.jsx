import PropTypes from 'prop-types';
import React from 'react';

class MultiAvatar extends React.Component {
  renderInitials(initials) {
    return (
      <text x="50" y="50" textAnchor="middle" dy="0.35em" fontSize="30">{initials}</text>
    );
  }

  renderAvatars() {
    const { images, names } = this.props;
    const firstUserIntitials = names[0];
    const secondUserInitials = names[1];

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
          {firstUserProfileImageUrl === {} && this.renderInitials(firstUserIntitials)}
        </svg>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="avatar avatar--member multi-avatars__foreground-avatar"
          style={secondUserProfileImageUrl ? { backgroundImage: `url(${secondUserProfileImageUrl})` } : {}}
        >
          {secondUserProfileImageUrl === {} && this.renderInitials(secondUserInitials)}
        </svg>
      </div>
    );
  }

  render() {
    return this.renderAvatars();
  }
}

MultiAvatar.propTypes = {
  images: PropTypes.array,
  names: PropTypes.array,
};

export default MultiAvatar;
