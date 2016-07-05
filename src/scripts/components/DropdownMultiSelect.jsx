import React from 'react';
import cx from 'classnames';
import onClickOutside from 'react-onclickoutside';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuHeader from './DropdownMenuHeader';
import DropdownMenuScroll from './DropdownMenuScroll';
import Pill from './Pill';

class DropdownMultiSelect extends React.Component {
  static displayName = 'RhinoDropdownMultiSelect';

  static propTypes = {
    activeKeys:   React.PropTypes.arrayOf(React.PropTypes.number),
    children:     React.PropTypes.node,
    className:    React.PropTypes.string,
    disabled:     React.PropTypes.bool,
    label:        React.PropTypes.string,
    placeholder:  React.PropTypes.string,
    position:     React.PropTypes.string,
    onSelect:     React.PropTypes.func,
  };

  static defaultProps = {
    activeKeys:   [],
    disabled:     false,
    placeholder:  'Click or type to select more ...',
    type:         'default',
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
    const { disabled, placeholder, position, children } = this.props;
    const items = this.state.items;
    const activeKeys = this.state.activeKeys;

    const dropdownClasses = cx('dropdown', 'dropdown--multiselect', 'u-m-b-sm', {
      open:  this.state.isOpen,
    });

    const dropdownToggleClasses = cx('dropdown__input', 'form__control', 'form__control--chevron', {
      'disabled': disabled, //eslint-disable-line
    });

    const dropdownMenuClasses = cx('dropdown__menu', {
      'dropdown__menu--right': position === 'right',
      'dropdown__menu--top': position === 'top',
      'dropdown__menu--top dropdown__menu--right': position === 'top-right',
    });

    const renderPill = (id) => {
      let label = '';

      // Figure out label
      React.Children.forEach(children, child => {
        if (child.type === DropdownMenuItem && child.props.id === id) {
          label = child.props.label;
        }
      });

      return (
        <Pill label={label} onClick={() => this.itemClick(id)} key={id} className="u-m-r-sm" />
      );
    };

    return (
      <span>
        <div className={dropdownClasses}>
          {/* eslint no-return-assign:0 */}
          <input onClick={this.handleToggle} ref={(ref) => this.filterInput = ref} type="text" className={dropdownToggleClasses} placeholder={placeholder} onChange={this.handleFilter} />
          <ul className={dropdownMenuClasses}>
            <DropdownMenuScroll>
              {items.length > 0 ? items : <DropdownMenuHeader>No results</DropdownMenuHeader>}
            </DropdownMenuScroll>
          </ul>
        </div>
        <div>
          {activeKeys.map(renderPill)}
        </div>
      </span>
    );
  }
}

const DropdownMultiSelectDocs = DropdownMultiSelect;
export { DropdownMultiSelectDocs };

export default onClickOutside(DropdownMultiSelect);
