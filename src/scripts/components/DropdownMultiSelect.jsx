/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import Dropdown from './Dropdown';
import { UtilitySystem } from '../UtilitySystem';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

class DropdownMultiSelect extends React.Component {
  labelValue(item) {
    return this.props.getItemLabelValue ? this.props.getItemLabelValue(item) : item.name;
  }

  renderList = (id) => {
    const item = this.props.items[id];
    const selected = this.props.selectedItemIds.includes(id);
    return (
      <Checkbox
        key={id}
        isChecked={selected}
        onChange={() => this.props.handleSelect(this.props.name, id)}
        name={this.labelValue(item)}
        label={<span className="u-p-l-small">{this.labelValue(item)}</span>}
        className="u-p-t-small"
      />
    );
  };

  renderLabel() {
    if (this.props.selectedItemIds.length > 0) {
      const label = this.props.selectedItemIds.map((id) => this.labelValue(this.props.items[id])).join(', ');
      return <span className="dropdown__menu__label--selected">{label}</span>;
    }
    return this.props.label;
  }

  render() {
    const {
      selectedItemIds,
      className,
      dataCypress,
      position,
      label,
    } = this.props;
    const dropdownClasses = cx(`multi-select__dropdown ${className || ''}`, {
      'multi-select__dropdown--wide': this.props.wide, // All filter
    });

    const itemIds = [...this.props.itemIds];
    let dropdownType = 'input';
    let outlined = false;
    if (selectedItemIds.length > 0) {
      dropdownType = 'primary';
      outlined = true;
    }

    return (
      <Dropdown
        autoFocusInput={false}
        label={this.renderLabel()}
        type={dropdownType}
        outlined={outlined}
        dataCypress={dataCypress || `dropdownMultiSelect-${label}`}
        disableScroll
        className={dropdownClasses}
        position={position || 'right'}
        wide={this.props.wide}
      >
        <div className="dropdown__menu__container">
          {itemIds.length > 0 ? (
            <Scrollbars
              className="resource-group__scroll--checkbox"
              autoHeight
              autoHeightMax={UtilitySystem.config.resourceSizes.large}
            >
              <CheckboxGroup>
                {itemIds.map(this.renderList)}
              </CheckboxGroup>
            </Scrollbars>
          ) : (
            <div className="search__no-results">No results</div>
          )}
        </div>
      </Dropdown>
    );
  }
}

DropdownMultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  itemIds: PropTypes.array.isRequired,
  selectedItemIds: PropTypes.array.isRequired,
  items: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  dataCypress: PropTypes.string,
  className: PropTypes.string,
  getItemLabelValue: PropTypes.func,
  wide: PropTypes.bool,
  position: PropTypes.string,
};

export default DropdownMultiSelect;
