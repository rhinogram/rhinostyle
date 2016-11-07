import React from 'react';
import cx from 'classnames';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuHeader from './DropdownMenuHeader';
import DropdownMenuScroll from './DropdownMenuScroll';
import DropdownWrapper from './DropdownWrapper';
import Pill from './Pill';

class DropdownMultiSelect extends React.Component {
  static displayName = 'RhinoDropdownMultiSelect';

  static propTypes = {
    activeKeys:   React.PropTypes.arrayOf(React.PropTypes.number),
    block:        React.PropTypes.bool,
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    disabled:     React.PropTypes.bool,
    label:        React.PropTypes.string,
    onSelect:     React.PropTypes.func,
    placeholder:  React.PropTypes.string,
    position:     React.PropTypes.string,
    wide:         React.PropTypes.bool,
  };

  static defaultProps = {
    activeKeys:   [],
    block:        false,
    disabled:     false,
    placeholder:  'Click or type to select more ...',
    wide:         false,
  };

  state = {
    activeKeys: this.props.activeKeys,
    isOpen: false,
    items: this.props.children,
  };

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, child => {
      if (child.type === DropdownMenuItem) {
        returnChild = React.cloneElement(child, {
          onClick: () => this.itemClick(child.props.id, true),
          active: this.props.activeKeys.indexOf(child.props.id) > -1,
        });
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  }

  clearInput = () => {
    this.setState({
      isOpen: false,
    });

    this.filterInput.value = '';
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      items: this.getChildren(),
    });

    this.filterInput.value = '';
  }

  itemClick = (id, toggle) => {
    if (this.props.onSelect && typeof(this.props.onSelect === 'function')) {
      const result = this.updateActiveKeys(id);
      this.props.onSelect(...result);
    } else {
      this.updateActiveKeys(id);
    }

    if (toggle) {
      this.handleToggle();
    }
  }

  handleFilter = (e) => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true,
      });
    }

    const query = e.target.value;
    const items = [];
    const children = this.props.children;

    React.Children.forEach(children, child => {
      if (child.type === DropdownMenuItem) {
        const searchText = child.props.label;
        if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          items.push(React.cloneElement(child, {
            onClick: () => this.itemClick(child.props.id, true),
            active: this.props.activeKeys.indexOf(child.props.id) > -1,
            key: child.props.id,
          }));
        }
      }
    });

    this.setState({
      items,
    });
  }

  handleClickOutside = () => {
    this.clearInput();
  }

  updateActiveKeys = (index) => {
    const currentKeys = this.state.activeKeys;
    const currentIndex = currentKeys.indexOf(index);
    let action = null;

    if (currentIndex > -1) {
      currentKeys.splice(currentIndex, 1);
      action = 'remove';
    } else {
      currentKeys.push(index);
      action = 'add';
    }

    this.setState({
      activeKeys: currentKeys,
    });

    return [action, index, currentKeys];
  }

  render() {
    const { block, children, disabled, placeholder, position, wide } = this.props;
    const items = this.state.items;
    const activeKeys = this.state.activeKeys;
    const isOpen = this.state.isOpen;

    const dropdownClasses = cx('dropdown', 'dropdown--multiselect', {
      'dropdown--block': block,
      open:              this.state.isOpen,
    });

    const dropdownToggleClasses = cx('dropdown__input', 'form__control', 'form__control--chevron', {
      'disabled': disabled, //eslint-disable-line
    });

    const dropdownMenuClasses = cx('dropdown__menu', {
      'dropdown__menu--right': position === 'right',
      'dropdown__menu--top': position === 'top',
      'dropdown__menu--top dropdown__menu--right': position === 'top-right',
      'dropdown__menu--wide': wide,
    });

    const renderPill = (id) => {
      let icon = '';
      let label = '';

      // Figure out label
      React.Children.forEach(children, child => {
        if (child.type === DropdownMenuItem && child.props.id === id) {
          icon = child.props.icon;
          label = child.props.label;
        }
      });

      return (
        <Pill label={label} icon={icon} onClick={() => this.itemClick(id)} key={id} />
      );
    };

    return (
      <span>
        <DropdownWrapper className={dropdownClasses} handleClick={this.handleClickOutside} disableOnClickOutside={!isOpen} enableOnClickOutside={isOpen}>
          {/* eslint no-return-assign:0 */}
          <input onClick={this.handleToggle} ref={(ref) => this.filterInput = ref} type="text" className={dropdownToggleClasses} placeholder={placeholder} onChange={this.handleFilter} />
          <ul className={dropdownMenuClasses}>
            <DropdownMenuScroll>
              {items || <DropdownMenuHeader label="No results" />}
            </DropdownMenuScroll>
          </ul>
        </DropdownWrapper>
        <div className="dropdown-multiselect-pills">
          {activeKeys.map(renderPill)}
        </div>
      </span>
    );
  }
}

export default DropdownMultiSelect;
