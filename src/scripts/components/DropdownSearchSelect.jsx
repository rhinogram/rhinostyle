/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { UtilitySystem } from '../UtilitySystem';
import LoaderPulse from './LoaderPulse';
import Input from './Input';
import Icon from './Icon';
import Resource from './Resource';
import ResourceGroup from './ResourceGroup';
import Dropdown from './Dropdown';
import CheckboxGroup from './CheckboxGroup';

class DropdownSearchSelect extends React.Component {
  state = {
    searchText: '',
  };

  handleUpdateSelectedIds = (id) => {
    let selectedIds = this.props.selectedItemsIds;
    const { selectedItems } = this.props;
    const selectedItem = this.props.items[id];

    const addAction = !selectedIds.includes(id);

    if (addAction) {
      selectedIds = selectedIds.concat(id);
      selectedItems[id] = selectedItem;
    } else {
      selectedIds = selectedIds.filter((selectedId) => selectedId !== id);
      delete selectedItems[id];
    }
    this.props.handleUpdateSelectedIds(selectedIds, selectedItems, this.props.filterName.toLowerCase());
  };

  handleToggle = () => {
    if (this.state.searchText.length > 0) {
      this.setState({ searchText: '' });
      this.props.fetchAllItems('', this.props.filterName.toLowerCase());
    }
  };

  handleSearch = (id, value) => {
    const { fetchAllItems } = this.props;
    const searchValue = value;
    if (searchValue.length > 2 || searchValue.length === 0) fetchAllItems(searchValue, this.props.filterName.toLowerCase());

    this.setState({ searchText: searchValue });
  };

  clearSearch = () => {
    if (this.state.searchText.length > 0) {
      this.setState({ searchText: '' });
      this.props.fetchAllItems('', this.props.filterName.toLowerCase());
    }
  };

  renderListItems = (listItem, id) => {
    const selected = this.props.selectedItemsIds.includes(id);
    return (
      <Resource selected={selected} key={id} onClick={() => this.handleUpdateSelectedIds(id)} interfaceLeft={this.props.interfaceLeft}>
        {listItem.title}
      </Resource>
    );
  };

  renderList = (id, idx) => {
    const item = this.props.items[id];
    return this.renderListItems(item, id, idx);
  };

  renderSearchHelp = (idArray = this.props.itemsIds, loading = this.props.itemSearchLoading) => {
    if ((this.state.searchText.length === 0 || this.state.searchText.length > 2) && loading) {
      return (
        <div className="u-text-center">
          <LoaderPulse type="secondary" />
        </div>
      );
    } else if (this.state.searchText.length > 2 && !idArray.length && !loading) {
      return <div className="search__no-results">No results</div>;
    }

    return null;
  };

  renderSelectedItemsList = (id, idx) => {
    const item = this.props.selectedItems[id];
    return this.renderListItems(item, id, idx);
  };

  render() {
    const {
      itemSearchLoading,
      dropdownLabel,
      selectedItemsIds,
      filterName,
      className,
      dropDownClass,
      dataCypress,
    } = this.props;
    const classes = `resource-group__scroll${this.props.interfaceLeft && '--checkbox'} ${className && className}`;

    const itemsIds = [...this.props.itemsIds];
    const searchTitle = `Search ${filterName}`;
    // let returnValue = '';
    let dropdownType = 'input';
    let outlined = false;
    if (selectedItemsIds.length > 0) {
      dropdownType = 'primary';
      outlined = true;
    }
    return (
      <Dropdown
        wide
        disabled={this.props.disabled}
        autoFocusInput={false}
        label={dropdownLabel}
        onClick={this.clearSearch}
        className={dropDownClass}
        type={dropdownType}
        outlined={outlined}
        dataCypress={dataCypress}
        disableScroll
      >
        <div className="dropdown__menu__container">
          <div className="search__group">
            <Input
              placeholder={searchTitle}
              className="search__input"
              onChange={this.handleSearch}
              initialValue={this.state.searchText}
              addon="left"
              type="text"
              name="preloadedMembers"
              dataCypress={searchTitle}
              autoComplete="off"
            >
              <Icon icon="search" />
            </Input>
          </div>
        </div>
        <div className="dropdown__menu__container">
          {itemsIds.length > 0 ? (
            <Scrollbars className={classes} autoHeight autoHeightMax={UtilitySystem.config.resourceSizes.large}>
              {this.props.interfaceLeft ? (
                <CheckboxGroup blockGroup>{itemsIds.map(this.renderList)}</CheckboxGroup>
              ) : (
                <ResourceGroup interfaceMode="checkbox">{itemsIds.map(this.renderList)}</ResourceGroup>
              )}
            </Scrollbars>
          ) : (
            this.renderSearchHelp(itemsIds, itemSearchLoading)
          )}
        </div>
      </Dropdown>
    );
  }
}

DropdownSearchSelect.propTypes = {
  dataCypress: PropTypes.string,
  fetchAllItems: PropTypes.func.isRequired,
  handleUpdateSelectedIds: PropTypes.func.isRequired,
  itemsIds: PropTypes.array.isRequired,
  itemSearchLoading: PropTypes.bool.isRequired,
  selectedItemsIds: PropTypes.array.isRequired,
  selectedItems: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  dropdownLabel: PropTypes.string.isRequired,
  dropDownClass: PropTypes.string,
  filterName: PropTypes.string.isRequired,
  className: PropTypes.string,
  interfaceLeft: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DropdownSearchSelect;
