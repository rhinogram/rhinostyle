import React from 'react';

const Icon = (props) => <svg className={`icon ${props.className}`}><use xlinkHref={`#icon-${props.icon}`} /></svg>;

Icon.displayName = 'RhinoIcon';

Icon.propTypes = {
  className:  React.PropTypes.string,
  icon:       React.PropTypes.string.isRequired,
};

export default Icon;
