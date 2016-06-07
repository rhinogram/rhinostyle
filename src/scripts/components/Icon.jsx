import React      from 'react';
import classNames from 'classnames';

class Icon extends React.Component {
  static displayName = 'RhinoIcon';

  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['standard', 'avatar']),
  };

  static defaultProps = {
    type: 'standard',
  }

  render() {
    const icon = `#icon-${this.props.icon}`;
    const cx = classNames({
      /* eslint quote-props: [0] */
      'icon':         this.props.type === 'standard',
      'avatar__icon': this.props.type === 'avatar',
    });

    return (
      <svg className={cx}>
        <use xlinkHref={icon} />
      </svg>
    );
  }
}

export default Icon;
