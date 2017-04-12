import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Avatar extends React.Component {
  static displayName = 'RhinoAvatar';

  static propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    src: PropTypes.string,
    type: PropTypes.oneOf(['default', 'member']),
  };

  static defaultProps = {
    className: '',
    image: '',
    name: '',
    size: 'default',
    src: '',
    type: 'default',
  };

  state = {
    imageError: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.image) {
      this.setState({
        imageError: false,
      });
    }
  }

  _handleImageError = () => {
    this.setState({ imageError: true });
  };

  render() {
    const { className, image, size, type } = this.props;

    const name = this.props.name ? this.props.name.trim() : '';

    const classes = cx('avatar', className, {
      'avatar--sm': size === 'small',
      'avatar--lg': size === 'large',
      'avatar--default':  type === 'default',
      'avatar--member': type === 'member',
    });
    const styles = {
      backgroundImage: `url(${image})`,
    };

    // If image exists, use image for background
    if (image && !this.state.imageError) {
      return (
        <figure className={classes} style={styles}>
          <img alt={name} onError={this._handleImageError} style={{ display: 'none' }} src={image} />
        </figure>
      );
    }

    // If no image and no name, use icon
    if (!image && !name) {
      return (
        <figure className={classes}>
          <svg className="avatar__icon"><use xlinkHref="#icon-user" /></svg>
        </figure>
      );
    }

    let splitName = null;
    let initials = null;

    if (name) {
      splitName = name.split(' ');
      initials = splitName[0][0] + splitName[splitName.length - 1][0];
    }

    return (
      <figure className={classes}>
        {initials}
      </figure>
    );
  }
}

export default Avatar;
