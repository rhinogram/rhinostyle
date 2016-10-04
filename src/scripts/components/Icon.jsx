import React from 'react';
import cx    from 'classnames';

const Icon = (props) => {
  const { bump, className } = props;
  const classes = cx('icon', className, {
    'icon--bump-down':  bump === 'down',
    'icon--bump-up':    bump === 'up',
  });

  return (<svg className={classes} style={props.style}><use xlinkHref={`#icon-${props.icon}`} /></svg>);
};

Icon.displayName = 'RhinoIcon';

Icon.propTypes = {
  bump:       React.PropTypes.string,
  className:  React.PropTypes.string,
  icon:       React.PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: '',
  bump:      '',
};

export default Icon;
