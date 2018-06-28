import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import { Avatar, Button, Icon } from '../components';

class ResourceIntro extends React.Component {
  handleIconClick = (e) => {
    const { icon } = this.props;

    e.stopPropagation();

    if (icon.onClick) {
      icon.onClick(e);
    }
  }

  renderMedia = () => {
    const { icon, avatar } = this.props;
    let output = null;
    const validIcon = icon && icon.icon;

    if (validIcon) {
      if (icon.onClick) {
        output = (
          <Button reset onClick={this.handleIconClick}>
            <Icon bump={icon.bump} icon={icon.icon} />
          </Button>
        );
      } else {
        output = <Icon bump={icon.bump} icon={icon.icon} />;
      }
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
      const classes = cx('resource__intro__media', {
        'resource__intro__media--icon': validIcon,
        'resource__intro__media--hidden@xsmall': this.props.hideMediaXsmall,
      });

      return (
        <div className={classes}>
          {output}
        </div>
      );
    }

    return false;
  }

  renderTitle = () => {
    const { title, titleSub, children } = this.props;
    const titleClasses = cx('resource__intro__title__content', {
      'has-subtitle': titleSub,
    });
    const titleSubClasses = cx('resource__intro__title__sub', {
      'resource__intro__title__sub--hidden@xsmall': this.props.hideTitleSubXsmall,
    });

    return (
      <div className="resource__intro__title-wrapper">
        <div className="resource__intro__title">
          <span className={titleClasses}>{title}</span>{titleSub && <span className={titleSubClasses}>{titleSub}</span>}
        </div>
        {children && <div className="resource__intro__title__meta">{children}</div>}
      </div>
    );
  }

  render() {
    const classes = cx('resource__intro', {
      'has-avatar': this.props.avatar,
    });

    return (
      <div className={classes}>
        {this.renderMedia()}
        {this.renderTitle()}
      </div>
    );
  }
}

ResourceIntro.propTypes = {
  avatar: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['default', 'member']),
  }),
  icon: PropTypes.shape({
    icon: PropTypes.string,
    bump: PropTypes.string,
    onClick: PropTypes.func,
  }),
  children: PropTypes.node,
  title: PropTypes.any,
  titleSub: PropTypes.string,
  hideMediaXsmall: PropTypes.bool,
  hideTitleSubXsmall: PropTypes.bool,
};

export default ResourceIntro;
