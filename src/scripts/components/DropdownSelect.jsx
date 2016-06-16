import React from 'react';
import cx from 'classnames';
import Icon from './Icon';
import onClickOutside from 'react-onclickoutside';

class DropdownSelect extends React.Component {
  static displayName = 'RhinoDropdownSelect';

  static propTypes = {
    active:    React.PropTypes.bool,
    activeKey: React.PropTypes.number,
    block:     React.PropTypes.bool,
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    disabled:  React.PropTypes.bool,
    icon:      React.PropTypes.string,
    label:     React.PropTypes.string,
    position:  React.PropTypes.string,
    size:      React.PropTypes.oneOf(['small', 'large']),
    type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'default-outline', 'primary-outline', 'link']),
    wide:      React.PropTypes.bool,
  };

  static defaultProps = {
    active:   false,
    block:    false,
    disabled: false,
    type:     'default',
    wide:     false,
  };

  state = {
    isOpen: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({
        isOpen: false,
      });
    }
  }

  _handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { active, activeKey, block, className, disabled, icon, label, position, size, type, wide } = this.props;

    const dropdownClasses = cx('dropdown', {
      open:  this.state.isOpen,
      'dropdown--block': block,
    });

    const dropdownToggleClasses = cx('btn', 'dropdown__toggle', className, {
      'btn--default':   type === 'default',
      'btn--primary':   type === 'primary',
      'btn--secondary': type === 'secondary',
      'btn--link':      type === 'link',
      'btn--default-outline':   type === 'default-outline',
      'btn--primary-outline':   type === 'primary-outline',
      'btn--sm': size === 'small',
      'btn--lg': size === 'large',
      'btn--icon': (icon && !label),
      'active': active, //eslint-disable-line
      'disabled': disabled, //eslint-disable-line
    });

    const dropdownMenuClasses = cx('dropdown__menu', {
      'dropdown__menu--right': position === 'right',
      'dropdown__menu--top': position === 'top',
      'dropdown__menu--top dropdown__menu--right': position === 'top-right',
      'dropdown__menu--wide': wide,
    });

    const caretDirection = (position === 'top' || position === 'top-right') ? '#icon-chevron-up' : '#icon-chevron-down';

    let selectedLabel = null;
    if (activeKey) {
      this.props.children.forEach((ref) => {
        if (ref.props.id === activeKey) {
          selectedLabel = ref.props.children;
        }
      });
    }

    return (
      <div className={dropdownClasses}>
        <div onClick={this._handleToggle} className={dropdownToggleClasses} type="button">
          {icon ? <Icon className="dropdown__toggle__icon" icon={icon} /> : null}<span className="u-text-overflow">{selectedLabel || label}</span>
          <svg className="dropdown__toggle__caret"><use xlinkHref={caretDirection} /></svg>
        </div>
        <ul className={dropdownMenuClasses}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default onClickOutside(DropdownSelect);
