import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icons from '../../svg/icons.json';

// This cannot be a stateless component since icons may be used in the context of `<Tooltip />` which requires access to a ref
// eslint-disable-next-line
class Icon extends React.Component {
  getIcon = () => {
    const { bump, icon, className, size, ...opts } = this.props;
    const classes = cx('icon', className, {
      'icon--bump-down': bump === 'down',
      'icon--bump-up': bump === 'up',
      'icon--small': size === 'small',
      'icon--large': size === 'large',
    });

    // If we find an icon
    if (Icons[icon]) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
          {...opts}
          dangerouslySetInnerHTML={{ __html: [Icons[icon]] }} // eslint-disable-line react/no-danger
        />
      );
    }

    console.error('Icon not found'); // eslint-disable-line no-console
    return false;
  }

  render() {
    return this.getIcon();
  }
}

Icon.displayName = 'RhinoIcon';

Icon.propTypes = {
  bump: PropTypes.oneOf(['down', 'up']),
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
};

Icon.defaultProps = {
  className: '',
  bump: null,
};

export default Icon;
