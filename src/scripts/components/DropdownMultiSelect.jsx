import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import { DropdownMenuItem, DropdownMenuHeader, DropdownMenuScroll, DropdownWrapper, Pill, UtilityInlineGrid } from '../components';

class DropdownMultiSelect extends React.Component {
  static displayName = 'RhinoDropdownMultiSelect';

  static propTypes = {
    activeKeys: React.PropTypes.arrayOf(React.PropTypes.number),
    block: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    disabled: React.PropTypes.bool,
    explanationMessage: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    position: React.PropTypes.string,
    wide: React.PropTypes.bool,
    validationMessage: React.PropTypes.string,
  };

  static defaultProps = {
    activeKeys: [],
    block: false,
    disabled: false,
    placeholder: 'Click or type to select more ...',
    wide: false,
  };

  state = {
    activeKeys: this.props.activeKeys,
    isOpen: false,
    items: this.props.children,
  };

  getChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, (child) => {
      if (child.type === DropdownMenuItem) {
        returnChild = React.cloneElement(child, {
          onClick: () => this.itemClick(child.props.id, false),
          active: this.state.activeKeys.indexOf(child.props.id) > -1,
        });
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  }

  clearInput = () => {
    const $dropdown = ReactDOM.findDOMNode(this.dropdown);

    // Close dropdown
    $dropdown.timeline.reverse();

    this.setState({
      isOpen: false,
    });

    this.filterInput.value = '';
  }

  handleToggle = (e) => {
    const $dropdown = ReactDOM.findDOMNode(this.dropdown);

    // If we're focusing on the input
    if (e.target.tagName === 'INPUT') {
      // If the dropdown is not already open
      if (!this.state.isOpen) {
        // Open dropdown
        $dropdown.timeline.play();

        this.setState({
          isOpen: true,
          items: this.getChildren(),
        });
      }
      // Leave input open if it's already there
    } else {
      // Handle everything else as normal
      if (this.state.isOpen) {
        // Close dropdown
        $dropdown.timeline.reverse();
      } else {
        // Open dropdown
        $dropdown.timeline.play();
      }

      this.setState({
        isOpen: !this.state.isOpen,
        items: this.getChildren(),
      });

      this.filterInput.value = '';
    }
  }

  itemClick = (id, toggle) => {
    if (this.props.onSelect && typeof (this.props.onSelect === 'function')) {
      const result = this.updateActiveKeys(id);
      this.props.onSelect(...result);
    } else {
      this.updateActiveKeys(id);
    }

    if (toggle) {
      this.handleToggle();
    } else {
      this.setState({
        items: this.getChildren(),
      });

      const $input = this.filterInput;

      if ($input.value !== '') {
        // Mock event target
        this.handleFilter({
          target: $input,
        });
      }
    }
  }

  handleFilter = (e) => {
    if (!this.state.isOpen) {
      const $dropdown = ReactDOM.findDOMNode(this.dropdown);

      // Open dropdown
      $dropdown.timeline.play();

      this.setState({
        isOpen: true,
      });
    }

    const query = e.target.value;
    const items = [];
    const children = this.props.children;

    React.Children.forEach(children, (child) => {
      if (child.type === DropdownMenuItem) {
        const searchText = child.props.label;
        if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          items.push(React.cloneElement(child, {
            onClick: () => this.itemClick(child.props.id, false),
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
    const { block, children, disabled, explanationMessage, placeholder, position, wide, validationMessage } = this.props;
    const items = this.state.items;
    const activeKeys = this.state.activeKeys;
    const isOpen = this.state.isOpen;

    const dropdownClasses = cx('dropdown', 'dropdown--multiselect', {
      'dropdown--block': block,
    });

    const dropdownToggleClasses = cx('dropdown__input', 'form__control', 'form__control--chevron', {
      disabled,
      'form__control--error': validationMessage,
    });

    const dropdownMenuClasses = cx('dropdown__menu', {
      'dropdown__menu--right': position === 'right',
      'dropdown__menu--top': position === 'top',
      'dropdown__menu--top dropdown__menu--right': position === 'top-right',
      'dropdown__menu--wide': wide,
    });

    const showValidationMessage = () => {
      if (validationMessage) {
        return <div className="form__validation-message">{validationMessage}</div>;
      }

      return false;
    };

    const showExplanationMessage = () => {
      if (explanationMessage) {
        return <div className="form__explanation-message">{explanationMessage}</div>;
      }

      return false;
    };

    const renderPill = (id) => {
      let icon = '';
      let label = '';

      // Figure out label
      React.Children.forEach(children, (child) => {
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
        <DropdownWrapper className={dropdownClasses} handleClick={this.handleClickOutside} disableOnClickOutside={!isOpen} enableOnClickOutside={isOpen} ref={ref => (this.dropdown = ref)}>
          <input onClick={this.handleToggle} ref={ref => (this.filterInput = ref)} type="text" className={dropdownToggleClasses} placeholder={placeholder} onChange={this.handleFilter} />
          <div className={dropdownMenuClasses}>
            <DropdownMenuScroll>
              { items.length > 0 ? items : <DropdownMenuHeader label="No results" /> }
            </DropdownMenuScroll>
          </div>
        </DropdownWrapper>
        {showValidationMessage()}
        {showExplanationMessage()}
        {activeKeys.length ? <div className="u-p-t-small">
          <UtilityInlineGrid>
            {activeKeys.map(renderPill)}
          </UtilityInlineGrid>
        </div> : null }
      </span>
    );
  }
}

export default DropdownMultiSelect;
