import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icons from '../../svg/icons.json';

// This cannot be a stateless component since icons may be used in the context of `<Tooltip />` which requires access to a ref
// eslint-disable-next-line
class Icon extends React.Component {
  render() {
    const { bump, className } = this.props;
    const classes = cx('icon', className, {
      'icon--bump-down': bump === 'down',
      'icon--bump-up': bump === 'up',
    });

    return (
      <svg className={classes} style={this.props.style}>
        <use xlinkHref={`#icon-${this.props.icon}`} />
      </svg>
    );
  }
}

Icon.displayName = 'RhinoIcon';

Icon.propTypes = {
  bump: PropTypes.oneOf(['down', 'up']),
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Icon.defaultProps = {
  className: '',
  bump: null,
};

export default Icon;
