import PropTypes from 'prop-types';
import React from 'react';

class MultiAvatar extends React.Component {
  renderInitials(initials) {
    return (
      <text x="50" y="50" textAnchor="middle" dy="0.35em" fontSize="40">{initials}</text>
    );
  }

  formatInitials(name) {
    const splitName = name.split(' ');
    return splitName[0][0] + splitName[splitName.length - 1][0];
  }

  render() {
    const { foregroundImageUrl, backgroundImageUrl, foregroundName, backgroundName } = this.props;

    const foregroundInitials = this.formatInitials(foregroundName);
    const backgroundInitials = this.formatInitials(backgroundName);

    const foregroundImage = foregroundImageUrl;
    const backgroundImage = backgroundImageUrl;

    return (
      <div className="multi-avatars">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="avatar avatar--member multi-avatars__background-avatar"
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
        >
          {backgroundImage === '' && this.renderInitials(backgroundInitials)}
        </svg>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="avatar avatar--member multi-avatars__foreground-avatar"
          style={foregroundImage ? { backgroundImage: `url(${foregroundImage})` } : {}}
        >
          {foregroundImage === '' && this.renderInitials(foregroundInitials)}
        </svg>
      </div>
    );
  }
}

MultiAvatar.propTypes = {
  foregroundImageUrl: PropTypes.string,
  backgroundImageUrl: PropTypes.string,
  foregroundName: PropTypes.string.isRequired,
  backgroundName: PropTypes.string.isRequired,
};

MultiAvatar.defaultProps = {
  foregroundImageUrl: '',
  backgroundImageUrl: '',
};

export default MultiAvatar;
