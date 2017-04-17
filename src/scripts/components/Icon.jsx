import cx from 'classnames';
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
  bump: React.PropTypes.oneOf(['down', 'up']),
  className: React.PropTypes.string,
  icon: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

Icon.defaultProps = {
  className: '',
  bump: null,
};

export default Icon;
