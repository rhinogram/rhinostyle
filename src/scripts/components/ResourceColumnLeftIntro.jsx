import PropTypes from 'prop-types';
import React from 'react';

import { Avatar, Icon } from '../components';

class ResourceColumnLeftIntro extends React.Component {
  componentDidMount() {
    // console.log();
  }

  handleIconClick = () => {
    if (this.props.iconClick && typeof (this.props.iconClick === 'function')) {
      this.props.iconClick();
    }
  }

  renderMedia = () => {
    const { icon, avatar } = this.props;
    let output = null;

    if (icon) {
      output = (
        <button className="button--reset" onClick={this.handleIconClick}>
          <Icon icon={icon} />
        </button>
      );
    } else if (avatar) {
      output = (
        <Avatar
          size="small"
          name={avatar.name}
          type={avatar.type}
          image={avatar.image}
        />
      );
    }

    if (output) {
      return (
        <div className="resource__column-left__intro__media">
          {output}
        </div>
      );
    }

    return false;
  }

  renderTitle = () => {
    const { title, titleSub, children } = this.props;

    return (
      <div className="resource__column-left__intro__title">
        {title}{titleSub && <span className="resource__column-left__intro__title__sub">{titleSub}</span>}
        {children && <div className="resource__column-left__intro__title__meta">{children}</div>}
      </div>
    );
  }

  render() {
    return (
      <div className="resource__column-left__intro">
        {this.renderMedia()}
        {this.renderTitle()}
      </div>
    );
  }
}

ResourceColumnLeftIntro.displayName = 'RhinoResourceColumnLeftIntro';

ResourceColumnLeftIntro.propTypes = {
  avatar: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['default', 'member']),
  }),
  children: PropTypes.node,
  title: PropTypes.string,
  titleSub: PropTypes.string,
  icon: PropTypes.string,
  iconClick: PropTypes.func,
};

ResourceColumnLeftIntro.defaultProps = {
  title: '',
  titleSub: '',
  icon: '',
  iconClick: () => {},
};

export default ResourceColumnLeftIntro;
