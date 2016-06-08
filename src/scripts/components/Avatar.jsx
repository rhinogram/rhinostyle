import React from 'react';
import cx    from 'classnames';

class Avatar extends React.Component {
  static displayName = 'RhinoAvatar';

  static propTypes = {
    className: React.PropTypes.string,
    image: React.PropTypes.string,
    name: React.PropTypes.string,
    size: React.PropTypes.oneOf(['small', 'default', 'large']),
    type: React.PropTypes.oneOf(['member', 'patient']).isRequired,
  };

  static defaultProps = {
    image: '',
    size: 'default',
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
    console.log("pie");
    this.setState({ imageError: true });
  };

  render() {
    const { className, image, name, size, type } = this.props;
    const classes = cx('avatar', className, {
      'avatar--sm': size === 'small',
      'avatar--lg': size === 'large',
      'avatar--member':  type === 'member',
      'avatar--patient': type === 'patient',
    });
    const styles = {
      backgroundImage: `url(${image})`,
    };

    if (image && !this.state.imageError) {
      return (
        <figure className={classes} style={styles}>
          <img onError={this._handleImgError} style={{ display: 'none' }} src={image} />
        </figure>
      );
    }

    return (
      <figure className={classes}>{name}</figure>
    );
  }
}

export default Avatar;
