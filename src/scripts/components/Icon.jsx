import React from 'react';

const Icon = React.createClass({
  displayName: 'RhinoIcon',

  propTypes: {
    icon: React.PropTypes.string.isRequired
  },

  render() {
    const icon = `#icon-${this.props.icon}`;

    return (
      <svg className="icon">
        <use xlinkHref={icon} />
      </svg>
    );
  }
});

export default Icon;
