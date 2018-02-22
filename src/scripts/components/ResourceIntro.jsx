import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import { Avatar, Button, Icon } from '../components';

class ResourceIntro extends React.Component {
  handleIconClick = (e) => {
    const { icon } = this.props;

    e.stopPropagation();

    if (icon.onClick && typeof (icon.onClick === 'function')) {
      icon.onClick(e);
    }
  }

  renderMedia = () => {
    const { icon, avatar } = this.props;
    let output = null;
    const validIcon = icon.icon;

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
      const classes = `resource__intro__media${validIcon ? ' resource__intro__media--icon' : ''}`;

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
    const titleClass = `resource__intro__title__content ${titleSub ? 'has-subtitle' : ''}`;

    return (
      <div className="resource__intro__title-wrapper">
        <div className="resource__intro__title">
          <span className={titleClass}>{title}</span>{titleSub && <span className="resource__intro__title__sub">{titleSub}</span>}
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

ResourceIntro.displayName = 'RhinoResourceIntro';

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
  title: PropTypes.string,
  titleSub: PropTypes.string,
};

ResourceIntro.defaultProps = {
  title: '',
  titleSub: '',
  icon: {
    icon: '',
    bump: null,
    onClick: () => {},
  },
};

export default ResourceIntro;
