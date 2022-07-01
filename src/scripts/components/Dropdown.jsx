import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import Avatar from './Avatar';
import Button from './Button';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuItemWild from './DropdownMenuItemWild';
import DropdownMenuScroll from './DropdownMenuScroll';
import DropdownFilter from './DropdownFilter';
import DropdownWrapper from './DropdownWrapper';
import Icon from './Icon';

function customValidator(props, propName, componentName) {
  if (props.icon && props.avatar) {
    return new Error(`Only one of \`avatar\` or \`icon\` can be supplied to \`${componentName}\`.`);
  } else if (props[propName]) {
    if (typeof props[propName] !== 'string') {
      return new Error(
        `Invalid prop \`${props[propName]}\` of type \`${typeof props[
          propName
        ]}\` supplied to \`${componentName}\`, expected \`string\`.`,
      );
    }
  }
  return null;
}

class Dropdown extends React.Component {
  state = {
    activeKey: this.props.activeKey,
    isOpen: false,
    hasFilter: false,
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
    if (prevProps.isOpen !== this.props.isOpen) {
      this.handleCloseDropdown();
      this.props.handleSetIsOpen(true);
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
          active: this.state.activeKey && child.props.id === this.state.activeKey ? true : false, // eslint-disable-line
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
  };

  handleToggle = () => {
    if (this.state.isOpen) {
      // Close dropdown
      this.handleCloseDropdown();
    } else {
      this.handleOpenDropdown();
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  handleCloseDropdown = () => {
    const $dropdown = ReactDOM.findDOMNode(this.dropdown);
    // Close dropdown
    $dropdown.timeline.reverse();
    this.setState({ isOpen: false });
  }

  handleOpenDropdown = () => {
    const $dropdown = ReactDOM.findDOMNode(this.dropdown);
    // Open dropdown
    $dropdown.timeline.play();
    this.setState({ isOpen: true });
  }

  handleClickOutside = () => {
    this.handleCloseDropdown();

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  updateActiveKey = (index) => {
    if (this.props.hideActive) {
      return;
    }

    this.setState({
      activeKey: index,
    });
  };

  render() {
    const {
      avatar,
      autoFocusInput,
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
      noChangeLabel,
      outlined,
      dataCypress,
    } = this.props;
    const { activeKey, hasFilter } = this.state;

    const dropdownClasses = cx(
      'dropdown',
      {
        'dropdown--block': block,
      },
      wrapperClassName,
    );

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
      if (selectedLabel || label) {
        if (showOverflow) {
          return selectedLabel || label;
        }

        if (selectedLabel === noChangeLabel) {
          return label;
        }

        return <span className="dropdown__toggle__text">{selectedLabel || label}</span>;
      }

      return false;
    };

    return (
      <DropdownWrapper
        autoFocusInput={autoFocusInput}
        className={dropdownClasses}
        handleClick={this.handleClickOutside}
        disableOnClickOutside={!enableClickOutside}
        enableOnClickOutside={enableClickOutside}
        onStart={onStart}
        onComplete={onComplete}
        onReverseComplete={onReverseComplete}
        onReverseStart={onReverseStart}
        dataCypress={dataCypress}
        ref={(ref) => (this.dropdown = ref)}
      >
        <Button
          reset={reset}
          size={size}
          iconOnly={icon && !label && !avatar}
          avatarOnly={avatar && !icon && !label}
          type={type}
          onClick={this.handleToggle}
          className={dropdownToggleClasses}
          disabled={disabled}
          title={title}
          outlined={outlined}
        >
          {selectedIcon || icon ? <Icon className="dropdown__toggle__icon" icon={selectedIcon || icon} /> : null}
          {avatar && (
            <Avatar
              name={avatar.name}
              type={avatar.type}
              image={avatar.image}
              size={avatar.size}
              className="app-header__avatar"
              onClick={this.handleToggle}
            />
          )}
          {showLabel()}
          {hideCaret || (icon && avatar && !label && !selectedLabel) ? null : (
            <Icon size="small" icon="caret-down" className="dropdown__toggle__caret" />
          )}
        </Button>
        <div className={dropdownMenuClasses}>
          {hasFilter || disableScroll ? (
            this.getChildren()
          ) : (
            <DropdownMenuScroll>{this.getChildren()}</DropdownMenuScroll>
          )}
        </div>
      </DropdownWrapper>
    );
  }
}

Dropdown.propTypes = {
  dataCypress: PropTypes.string,
  autoFocusInput: PropTypes.bool,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disableScroll: PropTypes.bool,
  hideCaret: PropTypes.bool,
  hideActive: PropTypes.bool,
  icon: customValidator,
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
    'outline',
    'link',
    'link-muted',
    'danger',
  ]),
  wide: PropTypes.bool,
  showOverflow: PropTypes.bool,
  onComplete: PropTypes.func,
  onReverseComplete: PropTypes.func,
  onReverseStart: PropTypes.func,
  onStart: PropTypes.func,
  manualClose: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  noChangeLabel: PropTypes.string,
  outlined: PropTypes.bool,
  avatar: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['default', 'member']),
    size: PropTypes.string,
  }),
  isOpen: PropTypes.bool,
  handleSetIsOpen: PropTypes.func,
};

Dropdown.defaultProps = {
  type: 'default',
  autoFocusInput: true,
};

export default Dropdown;
