import React from 'react';
import cx from 'classnames';

class DropdownMenuItem extends React.Component {
  static displayName = 'RhinoDropdownMenuItem';

  static propTypes = {
    active:    React.PropTypes.bool,
    children:  React.PropTypes.node,
    click:     React.PropTypes.func,
    className: React.PropTypes.string,
    disabled:  React.PropTypes.bool,
    url:       React.PropTypes.string,
  };

  static defaultProps = {
    active: false,
    click: () => {},
    disabled: false,
  };

  handleClick = () => {
    let returnVal = null;
    if (this.props.url) {
      window.location = this.props.url;
      returnVal = null;
    } else {
      returnVal = this.props.click();
    }
    return returnVal;
  }

  render() {
    const { active, className, disabled } = this.props;
    const classes = cx('dropdown__menu__item', className, {
      'active': active, //eslint-disable-line
      'disabled': disabled, //eslint-disable-line
    });

    return (
      <li className={classes}><a href="javascript:void(0)" onClick={this.handleClick}>{this.props.children}</a></li>/* eslint no-script-url:0 */
    );
  }
}

export default DropdownMenuItem;
