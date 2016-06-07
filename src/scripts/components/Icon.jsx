import React from 'react';
import cx    from 'classnames';

class Icon extends React.Component {
  static displayName = 'RhinoIcon';

  static propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: 'standard',
  }

  render() {
    const { className } = this.props;
    const icon = `#icon-${this.props.icon}`;
    const classes = cx('icon', className);

    return (
      <svg className={classes}>
        <use xlinkHref={icon} />
      </svg>
    );
  }
}

export default Icon;
