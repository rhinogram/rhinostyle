import React from 'react';

const LoaderLine = props => <div className={`loader-line ${props.className}`}><span className="loader-line__line"></span><span className="loader-line__line"></span></div>;

LoaderLine.displayName = 'RhinoLoaderline';

LoaderLine.propTypes = {
  className:  React.PropTypes.string,
};

export default LoaderLine;
