import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import { DropdownMenuItem, DropdownMenuItemWild, DropdownMenuScroll, DropdownFilter, DropdownWrapper, Icon } from '../components';

class Dropdown extends React.Component {
  static displayName = 'RhinoDropdown';

  static propTypes = {
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    block: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableScroll: PropTypes.bool,
    hideCaret: PropTypes.bool,
    hideActive: PropTypes.bool,
    icon: PropTypes.string,
    label: PropTypes.string,
    lockLabel: PropTypes.bool,
    position: PropTypes.string,
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    size: PropTypes.oneOf(['small', 'large']),
    type: PropTypes.oneOf(['default', 'primary', 'secondary', 'outline-primary', 'outline-reversed', 'link', 'input']),
    wide: PropTypes.bool,
    onComplete: PropTypes.func,
    onReverseComplete: PropTypes.func,
    onReverseStart: PropTypes.func,
    onStart: PropTypes.func,
    manualClose: PropTypes.bool,
  };

  static defaultProps = {
    block: false,
    disabled: false,
    disableScroll: false,
    hideCaret: false,
    hideActive: false,
    type: 'default',
    wide: false,
    onComplete: () => {},
    onReverseComplete: () => {},
    onReverseStart: () => {},
    onStart: () => {},
    manualClose: false,
  };

  state = {
    activeKey: this.props.activeKey,
    isOpen: false,
    hasFilter: false,
  };

  componentWillMount() {
    React.Children.map(this.props.children, (child) => {
      if (!child) return;
      if (child.type === DropdownFilter) {
        this.setState({ hasFilter: true });
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activeKey !== this.props.activeKey) {
      this.setState({
        activeKey: newProps.activeKey,
      });
    }
  }

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, (child) => {
      if (!child) return false;

      if (child.type === DropdownMenuItem) {
        const onClick = () => {
          if (child.props.id) {
            if (this.props.onSelect && typeof (this.props.onSelect === 'function')) {
              this.updateActiveKey(child.props.id);
              this.props.onSelect(child.props.id);
            } else {
              this.updateActiveKey(child.props.id);
            }
          }

          if (child.props.onClick && typeof (child.props.onClick === 'function')) {
            child.props.onClick();
          }

          this.handleToggle();
        };

        returnChild = React.cloneElement(child, {
          onClick,
          active: this.state.activeKey && (child.props.id === this.state.activeKey) ? true : false, // eslint-disable-line
        });
      } else if (child.type === DropdownFilter) {
        returnChild = React.cloneElement(child, {
          onSelect: this.props.onSelect,
          handleToggle: this.handleToggle,
          activeKey: this.state.activeKey,
          icon: this.props.icon,
          updateActiveKey: this.updateActiveKey,
        });
      } else if (child.type === DropdownMenuItemWild) {
        returnChild = React.cloneElement(child, {
          handleToggle: this.handleToggle,
        });
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  }

  handleToggle = () => {
    const $dropdown = ReactDOM.findDOMNode(this.dropdown);

    if (this.state.isOpen) {
      // Close dropdown
      $dropdown.timeline.reverse();
    } else {
      // Open dropdown
      $dropdown.timeline.play();
    }

    // Update state
    this.setState({
      isOpen: !this.state.isOpen,
    });

    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick();
    }
  };

  handleClickOutside = () => {
    const $dropdown = ReactDOM.findDOMNode(this.dropdown);

    // Close dropdown
    $dropdown.timeline.reverse();

    this.setState({ isOpen: false });

    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick();
    }
  }

  updateActiveKey = (index) => {
    if (this.props.hideActive) {
      return;
    }

    this.setState({
      activeKey: index,
    });
  }

  render() {
    const { block, className, disabled, disableScroll, hideCaret, label, icon, lockLabel, position, size, type, wide, onStart, onComplete, onReverseStart, onReverseComplete } = this.props;
    const activeKey = this.state.activeKey;
    const hasFilter = this.state.hasFilter;

    const dropdownClasses = cx('dropdown', {
      'dropdown--block': block,
    });

    const dropdownToggleClasses = cx('button', 'dropdown__toggle', className, {
      'button--default':   type === 'default',
      'button--input':     type === 'input',
      'button--primary':   type === 'primary',
      'button--secondary': type === 'secondary',
      'button--link':      type === 'link',
      'button--outline-primary':   type === 'outline-primary',
      'button--outline-reversed':  type === 'outline-reversed',
      'button--small': size === 'small',
      'button--large': size === 'large',
      'button--icon': (icon && !label),
    });

    const dropdownMenuClasses = cx('dropdown__menu', {
      'dropdown__menu--right': position === 'right',
      'dropdown__menu--center': position === 'center',
      'dropdown__menu--top': position === 'top',
      'dropdown__menu--top dropdown__menu--right': position === 'top-right',
      'dropdown__menu--top dropdown__menu--center': position === 'top-center',
      'dropdown__menu--wide': wide,
    });

    let selectedLabel = null;
    let selectedIcon = null;

    if (activeKey && !lockLabel) {
      React.Children.forEach(this.props.children, (child) => {
        if (!child) return;
        if (child.type === DropdownMenuItem) {
          if (child.props.id === activeKey) {
            selectedLabel = child.props.label;
            selectedIcon = child.props.icon || child.props.labelIcon;
          }
        } else if (child.type === DropdownFilter) {
          React.Children.forEach(child.props.children, (filterChild) => {
            if (filterChild.type === DropdownMenuItem) {
              if (filterChild.props.id === activeKey) {
                selectedLabel = filterChild.props.label;
                selectedIcon = filterChild.props.icon || child.props.labelIcon;
              }
            }
          });
        }
      });
    }

    const enableClickOutside = this.props.manualClose ? false : this.state.isOpen;

    return (
      <DropdownWrapper className={dropdownClasses} handleClick={this.handleClickOutside} disableOnClickOutside={!enableClickOutside} enableOnClickOutside={enableClickOutside} onStart={onStart} onComplete={onComplete} onReverseComplete={onReverseComplete} onReverseStart={onReverseStart} ref={ref => (this.dropdown = ref)}>
        <button onClick={this.handleToggle} className={dropdownToggleClasses} disabled={disabled} type="button">
          <span className="button__text-wrapper">
            {selectedIcon || icon ? <Icon className="dropdown__toggle__icon" icon={selectedIcon || icon} /> : null}<span className="dropdown__toggle__text">{selectedLabel || label}</span>
            {hideCaret ? null : <svg className="dropdown__toggle__caret"><use xlinkHref="#icon-chevron-down" /></svg>}
          </span>
        </button>
        <div className={dropdownMenuClasses}>
          {hasFilter || disableScroll ? this.getChildren() : <DropdownMenuScroll>{this.getChildren()}</DropdownMenuScroll>}
        </div>
      </DropdownWrapper>
    );
  }
}

export default Dropdown;
