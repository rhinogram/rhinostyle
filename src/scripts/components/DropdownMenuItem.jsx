import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from './Avatar';
import Button from './Button';
import Icon from './Icon';
import { UtilitySystem } from '../UtilitySystem';

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
  handleClick = () => {
    let returnVal = null;
    if (this.props.url) {
      if (!this.props.blankWindow) {
        window.location = this.props.url;
      } else {
        window.open(this.props.url);
      }
      returnVal = null;
    } else if (this.props.onClick) {
      returnVal = this.props.onClick();
    }
    return returnVal;
  }

  render() {
    const { active, avatar, className, disabled, icon, label, labelDesc, labelRaised, dataCypress } = this.props;
    const classes = cx('dropdown__menu__item', className, {
      [UtilitySystem.config.classes.active]: active,
      [UtilitySystem.config.classes.disabled]: disabled,
    });

    const renderContent = () => (
      <div className="dropdown__menu__item__content">
        {avatar && (<Avatar size="small" name={avatar.name} type={avatar.type} image={avatar.image} className="u-m-r-small" />)}
        <div className="dropdown__menu__item__content__container">
          <div className="dropdown__menu__item__content__label">
            {icon && (<Icon icon={icon} className="u-m-r-small" />)}<span className="u-text-overflow" data-cypress={label}>{label}</span>
            {labelRaised && (<div className="u-inline-block"><span className="dropdown__menu__item__content__raised">{labelRaised}</span></div>)}
          </div>
          {labelDesc && (<div className="dropdown__menu__item__content__desc">{labelDesc}</div>)}
        </div>
      </div>
    );

    const markup = (
      <div className={classes}>
        <Button
          reset
          className="dropdown__menu__item__link"
          onClick={this.handleClick}
          data-cypress={dataCypress}
        >
          {renderContent()}
        </Button>
      </div>
    );

    return markup;
  }
}

DropdownMenuItem.propTypes = {
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
  label: PropTypes.any,
  labelDesc: PropTypes.any,
  url: PropTypes.string,
  labelRaised: PropTypes.any,
  dataCypress: PropTypes.string,
};

export default DropdownMenuItem;
