import React from 'react';
import cx from 'classnames';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownSelectFilter from './DropdownSelectFilter';
import Icon from './Icon';
import onClickOutside from 'react-onclickoutside';

class DropdownSelect extends React.Component {
  static displayName = 'RhinoDropdownSelect';

  static propTypes = {
    activeKey: React.PropTypes.number,
    block:     React.PropTypes.bool,
    children:  React.PropTypes.node,
    className: React.PropTypes.string,
    disabled:  React.PropTypes.bool,
    icon:      React.PropTypes.string,
    label:     React.PropTypes.string,
    position:  React.PropTypes.string,
    select:    React.PropTypes.func,
    size:      React.PropTypes.oneOf(['small', 'large']),
    type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'default-outline', 'primary-outline', 'link']),
    wide:      React.PropTypes.bool,
  };

  static defaultProps = {
    block:    false,
    disabled: false,
    type:     'default',
    wide:     false,
  };

  state = {
    isOpen: false,
    activeKey: this.props.activeKey,
  };

  getChildren = () => {
    console.log('getting children state/props', this.state.activeKey, this.props.activeKey);
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, child => {
      if (child.type === DropdownMenuItem) {
        const click = () => {
          if (this.props.select && typeof(this.props.select === 'function')) {
            this.updateActiveKey(child.props.id, child.props.icon);
            this.props.select(child.props.id, child.props.icon);
          } else {
            this.updateActiveKey(child.props.id, child.props.icon);
          }

          this.handleToggle();
        };

        returnChild = React.cloneElement(child, {
          click,
          active: child.props.id === this.state.activeKey,
        });
      } else if (child.type === DropdownSelectFilter) {
        returnChild = React.cloneElement(child, {
          select: this.props.select,
          handleToggle: this.handleToggle,
          activeKey: this.state.activeKey,
          icon: this.props.icon,
          updateActiveKey: this.updateActiveKey,
        });
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  updateActiveKey = (index) => {
    this.setState({
      activeKey: index,
    });
  }

  render() {
    const { block, className, disabled, icon, label, position, size, type, wide } = this.props;
    const activeKey = this.state.activeKey;

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
      React.Children.forEach(this.props.children, child => {
        if (child.type === DropdownMenuItem) {
          if (child.props.id === activeKey) {
            selectedLabel = child.props.label;
          }
        } else if (child.type === DropdownSelectFilter) {
          React.Children.forEach(child.props.children, filterChild => {
            if (filterChild.type === DropdownMenuItem) {
              if (filterChild.props.id === activeKey) {
                selectedLabel = filterChild.props.label;
              }
            }
          });
        }
      });
    }

    return (
      <div className={dropdownClasses}>
        <div onClick={this.handleToggle} className={dropdownToggleClasses} type="button">
          {icon ? <Icon className="dropdown__toggle__icon" icon={icon} /> : null}<span className="u-text-overflow">{selectedLabel || label}</span>
          <svg className="dropdown__toggle__caret"><use xlinkHref={caretDirection} /></svg>
        </div>
        <ul className={dropdownMenuClasses}>
          {this.getChildren()}
        </ul>
      </div>
    );
  }
}

const DropdownSelectDocs = DropdownSelect;
export { DropdownSelectDocs };

export default onClickOutside(DropdownSelect);
