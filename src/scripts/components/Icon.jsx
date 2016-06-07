import React from 'react';
import cx    from 'classnames';

class Icon extends React.Component {
  static displayName = 'RhinoIcon';

  static propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['standard', 'avatar']),
  };

  static defaultProps = {
    type: 'standard',
  }

  render() {
    const { className } = this.props;
    const icon = `#icon-${this.props.icon}`;
    const classes = cx({
      'icon':         this.props.type === 'standard',
      'avatar__icon': this.props.type === 'avatar',
    }, className);

    return (
      <svg className={classes}>
        <use xlinkHref={icon} />
      </svg>
    );
  }
}

export default Icon;
