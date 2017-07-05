import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Icon = (props) => {
  const { bump, className } = props;
  const classes = cx('icon', className, {
    'icon--bump-down': bump === 'down',
    'icon--bump-up': bump === 'up',
  });

  return (
    <svg className={classes} style={props.style}>
      <use xlinkHref={`#icon-${props.icon}`} />
    </svg>
  );
};

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
