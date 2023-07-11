import React, { useState, useEffect } from 'react';
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

const DropdownMultiSelectAdvanced = ({
  avatarBaseUrl,
  blockGroup,
  className,
  dataCypress,
  disabled,
  dropDownClass,
  dropDownItemClass,
  dropdownLabel,
  fetchAllItems,
  filterName,
  handleClearAllSelectedItems,
  handleUpdateSelectedIds: handleUpdateSelected,
  interfaceLeft,
  itemSearchLoading,
  items,
  itemsIds,
  selectedItems,
  selectedItemsIds,
  type,
}) => {
  const [searchText, setSearchText] = useState('');
  const [isViewAllItems, setIsViewAllItems] = useState(true);

  const visibleItemsIds = isViewAllItems ? itemsIds : selectedItemsIds;
  const visibleItems = isViewAllItems ? items : selectedItems;

  useEffect(() => {
    if (selectedItemsIds.length === 0) {
      setIsViewAllItems(true);
    }
  }, [selectedItemsIds]);

  function handleUpdateSelectedIds(id) {
    const selectedItemsIdsCopy = [...selectedItemsIds];
    const selectedItem = items[id];
    const selectedItemsCopy = { ...selectedItems };

    const idIndex = selectedItemsIds.indexOf(id);
    if (idIndex < 0) {
      selectedItemsIdsCopy.push(id);
      selectedItemsCopy[id] = selectedItem;
    } else {
      selectedItemsIdsCopy.splice(idIndex, 1);
      delete selectedItemsCopy[id];
    }
    if (selectedItemsIdsCopy.length === 0) {
      setIsViewAllItems(selectedItemsIdsCopy.length === 0);
    }
    handleUpdateSelected(selectedItemsIdsCopy, selectedItemsCopy, filterName.toLowerCase());
  }

  function handleToggle() {
    if (isViewAllItems && searchText.length > 0) {
      setSearchText('');
      fetchAllItems('', filterName.toLowerCase());
    }
    setIsViewAllItems(!isViewAllItems);
  }

  function handleClearAll() {
    setIsViewAllItems(true);
    handleClearAllSelectedItems();
  }

  function handleSelectAll() {
    setIsViewAllItems(true);
    handleUpdateSelected(itemsIds, items, filterName.toLowerCase());
  }

  function handleSearch(inputName, value) {
    if (value.length > 2 || value.length === 0) fetchAllItems(value, filterName.toLowerCase());
    setSearchText(value);
  }

  function clearSearch() {
    if (searchText.length > 0) {
      setSearchText('');
      fetchAllItems('', filterName.toLowerCase());
    }
  }
  function renderList(id, idx) {
    const item = visibleItems[id];
    return renderListItem(item, id, idx);
  }

  function renderListItem(listItem, id) {
    const selected = selectedItemsIds.includes(id);
    if (type === 'member') {
      const profileImageUrl = listItem.profileImageUrl ? `${avatarBaseUrl}${listItem.profileImageUrl}` : '';
      const avatarDetails = { image: profileImageUrl, name: listItem.name, type: 'member' };
      return (
        <Resource
          className={dropDownItemClass}
          selected={selected}
          key={id}
          onClick={() => handleUpdateSelectedIds(id)}
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
          onChange={() => handleUpdateSelectedIds(id)}
          name={listItem.title}
          label={listItem.title}
          className={dropDownItemClass}
          interfaceLeft
        />
      );
    }
    return (
      <Resource
        className={dropDownItemClass}
        selected={selected}
        key={id}
        onClick={() => handleUpdateSelectedIds(id)}
      >
        {listItem.title}
      </Resource>
    );
  }

  const renderSearchHelp = (idArray = itemsIds, loading = itemSearchLoading) => {
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
  };

  const renderClearButton = () => (
    <Button size="small" type="link" onClick={handleClearAll} title="Clear All">
      Clear All
    </Button>
  );

  const renderSelectAllButton = () => (
    <Button size="small" type="link" onClick={handleSelectAll} title="Select All">
      Select All
    </Button>
  );

  const renderViewSelected = () => {
    const title = `View Selected (${selectedItemsIds.length})`;
    return (
      <Button
        size="small"
        type="link"
        onClick={handleToggle}
        disabled={selectedItemsIds.length === 0}
        title={title}
      >
        {title}
      </Button>
    );
  };

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
      onClick={clearSearch}
      className={dropDownClass}
      type={dropdownType}
      outlined={outlined}
      dataCypress={dataCypress}
      disableScroll
    >
      <div className="dropdown__menu__container">
        <div className="search__group">
          <UtilityInlineGrid className="u-flex u-flex-justify-between u-m-t-small u-text-small">
            {isViewAllItems ? (
              <>
                {selectedItemsIds?.length > 0 ? renderClearButton() : renderSelectAllButton()}
                {renderViewSelected()}
              </>
            ) : (
              <>
                {renderClearButton()}
                <div>
                  <Button size="small" type="link" onClick={handleToggle} title="Back">
                    Back
                  </Button>
                </div>
              </>
            )}
          </UtilityInlineGrid>
          <Input
            placeholder={searchTitle}
            className="search__input"
            onChange={handleSearch}
            initialValue={searchText}
            addon="left"
            type="text"
            name="preloadedMembers"
            dataFeatureTag={searchTitle}
            autoComplete="off"
          >
            <Icon icon="search" />
          </Input>
        </div>
      </div>
      <div className="dropdown__menu__container">
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
                {visibleItemsIds.map(renderList)}
              </CheckboxGroup>
            ) : (
              <ResourceGroup
                interfaceMode="checkbox"
              >
                {visibleItemsIds.map(renderList)}
              </ResourceGroup>
            )}
          </Scrollbars>
        ) : (
          renderSearchHelp(itemsIds, itemSearchLoading)
        )}
      </div>
    </Dropdown>
  );
};

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
  itemSearchLoading: PropTypes.bool.isRequired,
  items: PropTypes.object.isRequired,
  itemsIds: PropTypes.array.isRequired,
  selectedItems: PropTypes.object.isRequired,
  selectedItemsIds: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
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
