import React from 'react';
import cx    from 'classnames';

class Avatar extends React.Component {
  static displayName = 'RhinoAvatar';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    image: React.PropTypes.string,
    size:  React.PropTypes.oneOf(['small', 'default', 'large']),
    type:  React.PropTypes.oneOf(['member', 'patient']).isRequired,
  };

  static defaultProps = {
    image: '',
    size: 'default',
  };

  render() {
    const { className, image, size, type } = this.props;
    const classes = cx('avatar', className, {
      'avatar--sm': size === 'small',
      'avatar--lg': size === 'large',
      'avatar--member':  type === 'member',
      'avatar--patient': type === 'patient',
    });
    const styles = {
      backgroundImage: `url(${image})`,
    };

    return (
      <figure className={classes} style={styles}>{this.props.children}</figure>
    );
  }
}

export default Avatar;
