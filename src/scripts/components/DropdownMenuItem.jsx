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
  };

  static defaultProps = {
    active: false,
    click: () => {},
    disabled: false,
  };

  render() {
    const { active, className, click, disabled } = this.props;
    const classes = cx('dropdown__menu__item', className, {
      'active': active, //eslint-disable-line
      'disabled': disabled, //eslint-disable-line
    });

    return (
      <li className={classes}><a href="javascript:void(0)" onClick={click}>{this.props.children}</a></li>/* eslint no-script-url:0 */
    );
  }
}

export default DropdownMenuItem;
