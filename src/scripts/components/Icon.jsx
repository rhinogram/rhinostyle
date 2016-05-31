import React from 'react';

class Icon extends React.Component {
  static displayName = 'RhinoIcon';

  static propTypes = {
    icon: React.PropTypes.string.isRequired
  };

  render() {
    const icon = `#icon-${this.props.icon}`;

    return (
      <svg className="icon">
        <use xlinkHref={icon} />
      </svg>
    );
  }
}

export default Icon;
