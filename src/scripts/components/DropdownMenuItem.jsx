import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

import { Avatar, Icon } from '../components';

function customValidator(props, propName, componentName) {
  if (props.icon && props.avatar) {
    return new Error(`Only one of \`avatar\` or \`icon\` can be supplied to \`${componentName}\`.`);
  } else if (props[propName]) {
    if (typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${props[propName]}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected \`string\`.`);
    }
  }
  return null;
}

class DropdownMenuItem extends React.Component {
  static displayName = 'RhinoDropdownMenuItem';

  static propTypes = {
    active: PropTypes.bool,
    avatar: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.oneOf(['default', 'member']),
    }),
    blankWindow: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: customValidator,
    label: PropTypes.string,
    labelDesc: PropTypes.string,
    route: PropTypes.string,
    url: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    onClick: () => {},
    disabled: false,
  };

  handleClick = () => {
    let returnVal = null;
    if (this.props.url) {
      if (!this.props.blankWindow) {
        window.location = this.props.url;
      } else {
        window.open(this.props.url);
      }
      returnVal = null;
    } else {
      returnVal = this.props.onClick();
    }
    return returnVal;
  }

  render() {
    const { active, avatar, className, disabled, icon, label, labelDesc, route } = this.props;
    const classes = cx('dropdown__menu__item', className, {
      active,
      disabled,
    });

    const renderContent = () =>
      <div className="dropdown__menu__item__content">
        {avatar ? (<Avatar size="small" name={avatar.name} type={avatar.type} image={avatar.image} className="u-m-r-sm" />) : null}
        <div className="dropdown__menu__item__content__container">
          <div className="dropdown__menu__item__content__label">{icon ? (<Icon icon={icon} className="u-m-r-sm" />) : null}<span className="u-text-overflow">{label}</span></div>
          {labelDesc ? (<div className="dropdown__menu__item__content__desc">{labelDesc}</div>) : null}
        </div>
      </div>;

    let markup = '';

    if (route) {
      markup = (
        <div className={classes}>
          <Link to={route} className="dropdown__menu__item__link" onClick={this.handleClick}>
            {renderContent()}
          </Link>
        </div>
      );
    } else {
      markup = (
        <div className={classes}>
          <a href="javascript:void(0)" className="dropdown__menu__item__link" onClick={this.handleClick}>
            {renderContent()}
          </a>
        </div>
      );
    }

    return markup;
  }
}

export default DropdownMenuItem;
