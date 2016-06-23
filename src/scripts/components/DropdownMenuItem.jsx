import React from 'react';
import cx from 'classnames';
import Avatar from './Avatar';
import Icon from './Icon';

class DropdownMenuItem extends React.Component {
  static displayName = 'RhinoDropdownMenuItem';

  static propTypes = {
    active:      React.PropTypes.bool,
    avatar:      React.PropTypes.string,
    blankWindow: React.PropTypes.bool,
    children:    React.PropTypes.node,
    click:       React.PropTypes.func,
    className:   React.PropTypes.string,
    disabled:    React.PropTypes.bool,
    icon:        React.PropTypes.string,
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
