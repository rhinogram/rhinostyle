import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Checkbox from './Checkbox';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuItemWild from './DropdownMenuItemWild';
import DropdownMenuScroll from './DropdownMenuScroll';
import DropdownFilter from './DropdownFilter';
import DropdownWrapper from './DropdownWrapper';
import Icon from './Icon';

class DropdownCheckbox extends React.Component {
  state = {
    activeKey: this.props.activeKey,
    isOpen: false,
    hasFilter: false,
    isCheckbox: this.props.isCheckbox,
    checked: this.props.isChecked,
  };

  componentDidMount() {
    React.Children.map(this.props.children, (child) => {
      if (!child) return;
      if (child.type === DropdownFilter) {
        this.setState({ hasFilter: true });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeKey !== this.props.activeKey) {
      this.setState({
        activeKey: this.props.activeKey,
      });
    }
    if (prevProps.isChecked !== this.props.isChecked) {
      this.setState({
        checked: this.props.isChecked,
      });
    }
  }

  getChildren = () => {
    let returnChild = null;
    const { children } = this.props;

    return React.Children.map(children, (child) => {
      if (!child) return null;

      if (child.type === DropdownMenuItem) {
        const onClick = () => {
          if (child.props.id) {
            if (this.props.onSelect) {
              this.updateActiveKey(child.props.id);
              this.props.onSelect(child.props.id);
            } else {
              this.updateActiveKey(child.props.id);
            }
          }

          if (child.props.onClick) {
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

    const { isOpen } = this.state;
    if (isOpen) {
      // Close dropdown
      $dropdown.timeline.reverse();
    } else {
      // Open dropdown
      $dropdown.timeline.play();
    }

    // Update state
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  handleClickOutside = () => {
    const $dropdown = ReactDOM.findDOMNode(this.dropdown);

    // Close dropdown
    $dropdown.timeline.reverse();

    this.setState({ isOpen: false });

    if (this.props.onClick) {
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
    const {
      block,
      className,
      disabled,
      disableScroll,
      hideCaret,
      label,
      icon,
      lockLabel,
      position,
      reset,
      size,
      title,
      type,
      wide,
      onStart,
      onComplete,
      onReverseStart,
      onReverseComplete,
      showOverflow,
      wrapperClassName,
      showAssociatedLabel,
      checkboxClassName,
    } = this.props;
    const { activeKey, hasFilter } = this.state;

    const dropdownClasses = cx('dropdown', {
      'dropdown--block': block,
    }, wrapperClassName);

    const dropdownToggleClasses = cx('dropdown__toggle', className);

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

    const showLabel = () => {
      const { labelValueAssociated } = this.props;
      if (showAssociatedLabel) {
        return <span className="dropdown__toggle__text" onClick={this.handleToggle}>{labelValueAssociated}</span>;
      }
      if (selectedLabel || label) {
        if (showOverflow) {
          return selectedLabel || label;
        }

        return <span className="dropdown__toggle__text" onClick={this.handleToggle}>{selectedLabel || label}</span>;
      }
      return false;
    };
    const showCheckbox = () => {
      const { isCheckbox, checked } = this.state;
      const { onChange } = this.props;

      // Appending IE10/11 specific class for proper checkbox alignment.
      const checkboxClasses = checkboxClassName ? `${checkboxClassName} rhinobox__label--ie11` : 'rhinobox__label--ie11';

      if (isCheckbox) {
        return <Checkbox name="test" label=" " isChecked={checked} onChange={onChange} className={checkboxClasses} />;
      }
      return false;
    };

    return (
      <DropdownWrapper
        className={dropdownClasses}
        handleClick={this.handleClickOutside}
        disableOnClickOutside={!enableClickOutside}
        enableOnClickOutside={enableClickOutside}
        onStart={onStart}
        onComplete={onComplete}
        onReverseComplete={onReverseComplete}
        onReverseStart={onReverseStart}
        ref={(ref) => (this.dropdown = ref)}
      >
        <Button
          reset={reset}
          size={size}
          iconOnly={icon && !label}
          type={type}
          className={dropdownToggleClasses}
          disabled={disabled}
          title={title}
          hasClickableChildren
        >
          {(selectedIcon || icon) && <Icon className="dropdown__toggle__icon" icon={selectedIcon || icon} />}
          {showCheckbox()}
          <Button reset hasClickableChildren>
            {hideCaret || (icon && !label && !selectedLabel) ? (
              null
            ) : (
              // This icon needs to be wrapped in a <Button/>, because IE11 will only fire onClick event on the actual path of an SVG
              // and not it's container. If we remove the <Button/> wrapper and just use the <Icon/>, it's near impossible to click it.
              <Button reset onClick={this.handleToggle} data-cypress={title}>
                <Icon size="small" icon="caret-down" className="dropdown__toggle__caret" />
              </Button>
            )}
            {showLabel()}
          </Button>
        </Button>
        <div className={dropdownMenuClasses}>
          {hasFilter || disableScroll ? this.getChildren() : <DropdownMenuScroll>{this.getChildren()}</DropdownMenuScroll>}
        </div>
      </DropdownWrapper>
    );
  }
}

DropdownCheckbox.propTypes = {
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disableScroll: PropTypes.bool,
  hideCaret: PropTypes.bool,
  hideActive: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  lockLabel: PropTypes.bool,
  position: PropTypes.string,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  reset: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'accent',
    'input',
    'outline-reversed',
    'link',
    'link-muted',
    'danger',
    'checkbox',
    'checkbox-muted',
  ]),
  wide: PropTypes.bool,
  showOverflow: PropTypes.bool,
  showAssociatedLabel: PropTypes.bool,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
  manualClose: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  isCheckbox: PropTypes.bool,
  checkboxClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  labelValueAssociated: PropTypes.string,
};

DropdownCheckbox.defaultProps = {
  type: 'default',
  isChecked: false,
};

export default DropdownCheckbox;
