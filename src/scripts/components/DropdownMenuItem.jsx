import React from 'react';
import cx from 'classnames';
import Avatar from './Avatar';
import Icon from './Icon';

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
    active:      React.PropTypes.bool,
    avatar:      customValidator,
    blankWindow: React.PropTypes.bool,
    children:    React.PropTypes.node,
    click:       React.PropTypes.func,
    className:   React.PropTypes.string,
    disabled:    React.PropTypes.bool,
    icon:        customValidator,
    label:       React.PropTypes.string,
    url:         React.PropTypes.string,
  };

  static defaultProps = {
    active:    false,
    click:     () => {},
    disabled:  false,
    newWindow: false,
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
      returnVal = this.props.click();
    }
    return returnVal;
  }

  render() {
    const { active, avatar, className, disabled, icon, label } = this.props;
    const classes = cx('dropdown__menu__item', className, {
      'active': active, //eslint-disable-line
      'disabled': disabled, //eslint-disable-line
    });

    return (
      <li className={classes}><a href="javascript:void(0)" onClick={this.handleClick}>
        {icon ? (<Icon icon={icon} className="u-m-r-sm" />) : null}
        {avatar ? (<Avatar size="small" type="member" image={avatar} className="u-m-r-sm" />) : null}
        <span className="u-text-overflow">{label}</span></a></li>/* eslint no-script-url:0 */
    );
  }
}

export default DropdownMenuItem;
