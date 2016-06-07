import React      from 'react';
import classNames from 'classnames';

class Avatar extends React.Component {
  static displayName = 'RhinoAvatar';

  static propTypes = {
    classes: React.PropTypes.string,
    image: React.PropTypes.string,
    size:  React.PropTypes.oneOf(['small', 'default', 'large']),
    type:  React.PropTypes.oneOf(['member', 'patient']).isRequired
  };

  static defaultProps = {
    size: 'default'
  };

  render() {
    const { classes, size, type, image } = this.props;
    const cx = classNames('avatar', {
      'avatar--sm': size==='small',
      'avatar--lg': size==='large',
      'avatar--member':  type==='member',
      'avatar--patient': type==='patient'
    }, classes);
    const styles = {
      backgroundImage: `url(${image})`
    }

    return (
      <figure className={cx} style={styles}>{this.props.children}</figure>
    );
  }
}

export default Avatar;
