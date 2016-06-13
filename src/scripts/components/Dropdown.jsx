import React from 'react';
import cx from 'classnames';
import Icon from './Icon';
import onClickOutside from 'react-onclickoutside';

class Dropdown extends React.Component {
  static displayName = 'RhinoDropdown';

  static propTypes = {
    active:    React.PropTypes.bool,
    block:     React.PropTypes.bool,
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    disabled:  React.PropTypes.bool,
    icon:      React.PropTypes.string,
    label:     React.PropTypes.string,
    size:      React.PropTypes.oneOf(['small', 'normal', 'large']),
    type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'default-outline', 'primary-outlline', 'link']),
  };

  static defaultProps = {
    active:   false,
    block:    false,
    disabled: false,
    size:     'normal',
    type:     'default',
  };

  state = {
    isOpen: false,
  };

  _handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { active, block, className, disabled, icon, label, size, type } = this.props;

    const classes = cx('btn', 'dropdown__toggle', className, {
      'btn--default':   type === 'default',
      'btn--primary':   type === 'primary',
      'btn--secondary': type === 'secondary',
      'btn--link':      type === 'link',
      'btn--default-outline':   type === 'default-outline',
      'btn--primary-outline':   type === 'primary-outline',
      'btn--sm': size === 'small',
      'btn--lg': size === 'large',
      'btn--icon': (icon && !label),
      'active': active,
      'disabled': disabled, //eslint-disable-line
    });

    const dropdownClasses = cx('dropdown', {
      open:  this.state.isOpen,
      'dropdown--block': block,
    });

    return (
      <div className={dropdownClasses}>
        <div onClick={this._handleToggle} className={classes} type="button">
          {icon ? <Icon className="dropdown__toggle__icon" icon={icon} /> : null}<span className="u-text-overflow">{label}</span>
          <svg className="dropdown__toggle__caret"><use xlinkHref="#icon-chevron-down" /></svg>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
