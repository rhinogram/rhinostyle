import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import Dropdown from './Dropdown';
import { UtilitySystem } from '../UtilitySystem';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import UtilityInlineGrid from './UtilityInlineGrid';
import Button from './Button';

class DropdownMultiSelect extends React.Component {
  labelValue(item, id) {
    return this.props.getItemLabelValue && typeof this.props.getItemLabelValue === 'function' ? this.props.getItemLabelValue(item, id) : item.name;
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
        label={<span className="u-p-l-small">{this.labelValue(item, id)}</span>}
        className="u-p-t-small"
      />
    );
  };

  renderLabel() {
    if (this.props.selectedItemIds?.length > 0) {
      const label = this.props.selectedItemIds.map((id) => this.labelValue(this.props.items[id])).join(', ');
      return <span className="dropdown__menu__label--selected">{label}</span>;
    }
    return this.props.label;
  }
  renderClearButton = () => (
    <Button size="small" reset className="u-text-primary" onClick={this.props.handleClearAll} title="Clear All">
      Clear All
    </Button>
  )

  renderSelectAllButton = () => (
    <Button size="small" reset className="u-text-primary" o onClick={this.props.handleSelectAll} title="Select All">
      Select All
    </Button>
  );

  render() {
    const {
      selectedItemIds,
      dropdownClass,
      dataCypress,
      position,
      label,
      wide,
      disabled,
      customHeader,
    } = this.props;

    const itemIds = [...this.props.itemIds];
    let dropdownType = 'input';
    let outlined = false;
    if (selectedItemIds.length > 0) {
      dropdownType = 'primary';
      outlined = true;
    }

    const dropdownClasses = cx(`dropdown__multi-select ${dropdownClass || ''}`, {
      'dropdown__multi-select--wide': wide,
    });

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
        wide={wide}
        disabled={disabled}
      >

        <div className="dropdown__menu__container">
          {this.props.showSelectAll && (
          <UtilityInlineGrid className="u-flex u-flex-justify-between u-m-b-small u-text-small">
            {this.props.selectedItemIds?.length > 0 ? this.renderClearButton() : this.renderSelectAllButton()}
          </UtilityInlineGrid>
          )}
          {customHeader || null}
          {itemIds?.length > 0 ? (
            <Scrollbars
              className="resource-group__scroll--checkbox"
              autoHeight
              autoHeightMax={UtilitySystem.config.resourceSizes.large}
            >
              <CheckboxGroup className="dropdown__menu--checkbox">
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
  items: PropTypes.object.isRequired,
  itemIds: PropTypes.array.isRequired,
  selectedItemIds: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  dataCypress: PropTypes.string,
  dropdownClass: PropTypes.string,
  getItemLabelValue: PropTypes.func,
  wide: PropTypes.bool,
  position: PropTypes.string,
  disabled: PropTypes.bool,
  showSelectAll: PropTypes.bool,
  handleClearAll: PropTypes.func,
  handleSelectAll: PropTypes.func,
  customHeader: PropTypes.node,
};

export default DropdownMultiSelect;
