import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import Avatar from './Avatar';
import Button from './Button';
import Checkbox from './Checkbox';
import Icon from './Icon';
import MultiAvatar from './MultiAvatar';

class ResourceIntro extends React.Component {
  handleIconClick = (e) => {
    const { icon } = this.props;

    e.stopPropagation();

    if (icon.onClick) {
      icon.onClick(e);
    }
  }

  handleCheckboxClick = (name, value, event) => {
    const { checkbox } = this.props;

    if (checkbox.onChange) {
      checkbox.onChange(event);
    }
  }

  renderCheckbox = () => {
    const { checkbox } = this.props;
    const classes = cx('resource__intro__media', {
      'resource__intro__media--hidden@xsmall': this.props.hideMediaXsmall,
    });
    return (
      <div className={classes}>
        <Checkbox
          label={checkbox.label}
          name={checkbox.name}
          isChecked={checkbox.isChecked}
          onChange={this.handleCheckboxClick}
        />
      </div>
    );
  }

  renderMedia = () => {
    const { icon, avatar, multiAvatar, checkbox } = this.props;
    let output = null;
    const validIcon = icon && icon.icon;

    if (validIcon) {
      if (icon.onClick) {
        output = (
          <div className="u-flex">
            {checkbox && (
              <Checkbox
                label={checkbox.label}
                name={checkbox.name}
                isChecked={checkbox.isChecked}
                onChange={this.handleCheckboxClick}
              />
            )}
            <Button reset onClick={this.handleIconClick}>
              <Icon bump={icon.bump} icon={icon.icon} />
            </Button>
          </div>
        );
      } else {
        output = (
          <div className="u-flex">
            {checkbox && (
              <Checkbox
                label={checkbox.label}
                name={checkbox.name}
                isChecked={checkbox.isChecked}
                onChange={this.handleCheckboxClick}
              />
            )}
            <Icon bump={icon.bump} icon={icon.icon} />
          </div>
        );
      }
    } else if (avatar) {
      output = (
        <Avatar
          size="small"
          name={avatar.name}
          type={avatar.type}
          image={avatar.image}
          showOnlineStatus={avatar.showOnlineStatus}
          onlineStatus={avatar.onlineStatus}
        />
      );
    } else if (multiAvatar) {
      output = (
        <MultiAvatar
          foregroundImageUrl={multiAvatar.foregroundImageUrl}
          backgroundImageUrl={multiAvatar.backgroundImageUrl}
          foregroundName={multiAvatar.foregroundName}
          backgroundName={multiAvatar.backgroundName}
        />
      );
    } else if (checkbox) {
      output = (
        <Checkbox
          label={checkbox.label}
          name={checkbox.name}
          isChecked={checkbox.isChecked}
          onChange={this.handleCheckboxClick}
        />
      );
    }

    if (output) {
      const classes = cx('resource__intro__media', {
        'resource__intro__media--checkbox': checkbox && !checkbox.hasAvatar,
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
          <span className={titleClasses} data-cypress={title}>{title}</span>{titleSub && <span className={titleSubClasses}>{titleSub}</span>}
        </div>
        {children && <div className="resource__intro__title__meta">{children}</div>}
      </div>
    );
  }

  render() {
    const classes = cx('resource__intro', {
      'has-avatar': this.props.avatar || this.props.multiAvatar,
    });

    return (
      <div className={classes}>
        {this.props.checkbox && this.props.checkbox.hasAvatar && this.renderCheckbox()}
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
    showOnlineStatus: PropTypes.bool,
    onlineStatus: PropTypes.string,
  }),
  multiAvatar: PropTypes.shape({
    foregroundImageUrl: PropTypes.string,
    backgroundImageUrl: PropTypes.string,
    foregroundName: PropTypes.string,
    backgroundName: PropTypes.string,
  }),
  icon: PropTypes.shape({
    icon: PropTypes.string,
    bump: PropTypes.string,
    onClick: PropTypes.func,
  }),
  checkbox: PropTypes.shape({
    isChecked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    hasAvatar: PropTypes.bool,
  }),
  children: PropTypes.node,
  title: PropTypes.any,
  titleSub: PropTypes.any,
  hideMediaXsmall: PropTypes.bool,
  hideTitleSubXsmall: PropTypes.bool,
};

export default ResourceIntro;
