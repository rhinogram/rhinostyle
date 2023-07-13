import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import { UtilitySystem } from '../UtilitySystem';
import Button from './Button';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import Dropdown from './Dropdown';
import Icon from './Icon';
import Input from './Input';
import LoaderPulse from './LoaderPulse';
import Resource from './Resource';
import ResourceGroup from './ResourceGroup';
import ResourceIntro from './ResourceIntro';
import UtilityInlineGrid from './UtilityInlineGrid';

class DropdownMultiSelectAdvanced extends Component {
  state = {
    searchText: '',
    isViewAllItems: true,
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.selectedItemsIds.length === 0) {
      return { isViewAllItems: true };
    }
    return null;
  }

  handleUpdateSelectedIds = (id) => {
    const {
      selectedItemsIds,
      items,
      handleUpdateSelectedIds,
      filterName,
    } = this.props;

    const updatedArray = [...selectedItemsIds];
    const selectedItem = items[id];
    const selectedItemsCopy = { ...this.props.selectedItems };

    const idIndex = selectedItemsIds.indexOf(id);
    if (idIndex < 0) {
      updatedArray.push(id);
      selectedItemsCopy[id] = selectedItem;
    } else {
      updatedArray.splice(idIndex, 1);
      delete selectedItemsCopy[id];
    }
    if (updatedArray.length === 0) {
      this.setState({ isViewAllItems: true });
    }
    handleUpdateSelectedIds(updatedArray, selectedItemsCopy, filterName.toLowerCase());
  };

  handleToggle = () => {
    const { isViewAllItems } = this.state;
    const { fetchAllItems, filterName } = this.props;
    const { searchText } = this.state;

    if (isViewAllItems && searchText.length > 0) {
      this.setState({ searchText: '' });
      fetchAllItems('', filterName.toLowerCase());
    }
    this.setState({ isViewAllItems: !isViewAllItems });
  };

  handleClearAll = () => {
    const { handleClearAllSelectedItems } = this.props;
    this.setState({ isViewAllItems: true });
    handleClearAllSelectedItems();
  };

  handleSelectAll = () => {
    const { handleUpdateSelectedIds, itemsIds, items, filterName } = this.props;
    this.setState({ isViewAllItems: true });
    handleUpdateSelectedIds(itemsIds, items, filterName.toLowerCase());
  };

  handleSearch = (inputName, value) => {
    const { fetchAllItems, filterName } = this.props;
    if (value.length > 2 || value.length === 0) fetchAllItems(value, filterName.toLowerCase());
    this.setState({ searchText: value });
  };

  clearSearch = () => {
    const { searchText } = this.state;
    const { fetchAllItems, filterName } = this.props;
    if (searchText.length > 0) {
      this.setState({ searchText: '' });
      fetchAllItems('', filterName.toLowerCase());
    }
  };

  renderList(id, idx) {
    const visibleItems = this.state.isViewAllItems ? this.props.items : this.props.selectedItems;
    const item = visibleItems[id];
    return this.renderListItem(item, id, idx);
  }

  renderListItem(listItem, id) {
    const { selectedItemsIds, avatarBaseUrl, type, interfaceLeft, dropDownItemClass } = this.props;
    const selected = selectedItemsIds.includes(id);
    if (type === 'member') {
      const profileImageUrl = listItem.profileImageUrl ? `${avatarBaseUrl}${listItem.profileImageUrl}` : '';
      const avatarDetails = { image: profileImageUrl, name: listItem.name, type: 'member' };
      return (
        <Resource
          className={dropDownItemClass}
          selected={selected}
          key={id}
          onClick={() => this.handleUpdateSelectedIds(id)}
        >
          <ResourceIntro
            avatar={avatarDetails}
            title={listItem.memberName ? listItem.memberName : listItem.title}
          />
        </Resource>
      );
    }
    if (interfaceLeft) {
      return (
        <Checkbox
          key={id}
          isChecked={selected}
          onChange={() => this.handleUpdateSelectedIds(id)}
          name={listItem.title}
          className={dropDownItemClass}
          label={listItem.label || listItem.title}
        />
      );
    }
    return (
      <Resource
        className={dropDownItemClass}
        selected={selected}
        key={id}
        onClick={() => this.handleUpdateSelectedIds(id)}
      >
        {listItem.title}
      </Resource>
    );
  }

  renderSearchHelp(idArray, loading) {
    const { searchText } = this.state;
    if ((searchText.length === 0 || searchText.length > 2) && loading) {
      return (
        <div className="u-text-center">
          <LoaderPulse type="secondary" />
        </div>
      );
    } else if (searchText.length > 2 && !idArray.length && !loading) {
      return <div className="search__no-results">No results</div>;
    }

    return null;
  }

  renderClearButton() {
    return (
      <Button size="small" type="link" onClick={this.handleClearAll} title="Clear All">
        Clear All
      </Button>
    );
  }

  renderSelectAllButton() {
    return (
      <Button size="small" type="link" onClick={this.handleSelectAll} title="Select All">
        Select All
      </Button>
    );
  }

  renderViewSelected() {
    const { selectedItemsIds } = this.props;
    const title = `View Selected (${selectedItemsIds.length})`;
    return (
      <Button
        size="small"
        type="link"
        onClick={this.handleToggle}
        disabled={selectedItemsIds.length === 0}
        title={title}
      >
        {title}
      </Button>
    );
  }

  render() {
    const {
      className,
      dataCypress,
      disabled,
      dropDownClass,
      dropdownLabel,
      filterName,
      selectedItemsIds,
      itemsIds,
      itemSearchLoading,
      interfaceLeft,
      blockGroup,
    } = this.props;
    const { isViewAllItems, searchText } = this.state;

    const visibleItemsIds = isViewAllItems ? itemsIds : selectedItemsIds;

    const classes = `resource-group__scroll${interfaceLeft && '--checkbox'} ${className || ''}`;

    const searchTitle = `Search ${filterName}`;
    let dropdownType = 'input';
    let outlined = false;
    if (selectedItemsIds.length > 0) {
      dropdownType = 'primary';
      outlined = true;
    }

    return (
      <Dropdown
        wide
        disabled={disabled}
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
          <div className="search__group u-p-b">
            <UtilityInlineGrid className="u-flex u-flex-justify-between u-m-t-small u-text-small">
              {isViewAllItems ? (
                <>
                  {selectedItemsIds?.length > 0 ? this.renderClearButton() : this.renderSelectAllButton()}
                  {this.renderViewSelected()}
                </>
              ) : (
                <>
                  {this.renderClearButton()}
                  <div>
                    <Button size="small" type="link" onClick={this.handleToggle} title="Back">
                      Back
                    </Button>
                  </div>
                </>
              )}
            </UtilityInlineGrid>
            {isViewAllItems && (
            <Input
              placeholder={searchTitle}
              className="search__input"
              onChange={this.handleSearch}
              initialValue={searchText}
              addon="left"
              type="text"
              name="preloadedMembers"
              dataFeatureTag={searchTitle}
              autoComplete="off"
            >
              <Icon icon="search" />
            </Input>
            )}

          </div>
          <div>
            {itemsIds.length > 0 ? (
              <Scrollbars
                className={classes}
                autoHeight
                autoHeightMax={UtilitySystem.config.resourceSizes.large}
              >
                {interfaceLeft ? (
                  <CheckboxGroup
                    blockGroup={blockGroup}
                    className="dropdown__menu--checkbox"
                  >
                    {visibleItemsIds.map((id, idx) => this.renderList(id, idx))}
                  </CheckboxGroup>
                ) : (
                  <ResourceGroup
                    interfaceMode="checkbox"
                  >
                    {visibleItemsIds.map((id, idx) => this.renderList(id, idx))}
                  </ResourceGroup>
                )}
              </Scrollbars>
            ) : (
              this.renderSearchHelp(itemsIds, itemSearchLoading)
            )}
          </div>
        </div>
      </Dropdown>
    );
  }
}

DropdownMultiSelectAdvanced.propTypes = {
  avatarBaseUrl: PropTypes.string,
  className: PropTypes.string,
  dataCypress: PropTypes.string,
  disabled: PropTypes.bool,
  blockGroup: PropTypes.bool,
  dropDownClass: PropTypes.string,
  dropDownItemClass: PropTypes.string,
  dropdownLabel: PropTypes.string.isRequired,
  fetchAllItems: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  handleClearAllSelectedItems: PropTypes.func.isRequired,
  handleUpdateSelectedIds: PropTypes.func.isRequired,
  interfaceLeft: PropTypes.bool,
  itemSearchLoading: PropTypes.bool,
  items: PropTypes.object.isRequired,
  itemsIds: PropTypes.array.isRequired,
  selectedItems: PropTypes.object.isRequired,
  selectedItemsIds: PropTypes.array.isRequired,
  type: PropTypes.string,
};

DropdownMultiSelectAdvanced.defaultProps = {
  avatarBaseUrl: '',
  className: '',
  dataCypress: '',
  disabled: false,
  blockGroup: true,
  dropDownClass: '',
  dropDownItemClass: '',
  interfaceLeft: false,
};

export default DropdownMultiSelectAdvanced;
