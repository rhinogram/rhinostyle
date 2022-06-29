import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { UtilitySystem } from '../UtilitySystem';
import LoaderPulse from './LoaderPulse';
import Input from './Input';
import Icon from './Icon';
import Dropdown from './Dropdown';
import DropdownMenuItem from './DropdownMenuItem';

function DropdownSearchSelect(props) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (id, value) => {
    const { fetchAllItems } = props;
    const searchValue = value;
    if (searchValue.length > 2 || searchValue.length === 0) fetchAllItems(searchValue, props.filterName.toLowerCase());

    setSearchText(searchValue);
  };

  const clearSearch = () => {
    if (searchText.length > 0) {
      setSearchText('');
      props.fetchAllItems('', props.filterName.toLowerCase());
    }
  };

  const handleSelect = (id) => {
    const selectedItemId = id;
    const selectedItem = props.items[id];

    props.handleUpdateSelectedId(selectedItemId, selectedItem, props.filterName.toLowerCase());
    clearSearch();
  };

  const renderListItems = () => props.itemsIds.map((id) => {
    const listItem = props.items[id];
    return (
      <DropdownMenuItem
        key={id}
        id={id}
        label={listItem.title}
        active={props.selectedItemId === id}
        onClick={() => handleSelect(id)}
      />
    );
  });

  const renderSearchHelp = (idArray = props.itemsIds, loading = props.itemSearchLoading) => {
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

  const {
    itemSearchLoading,
    dropdownLabel,
    selectedItemId,
    filterName,
    className,
    dropDownClass,
    dataCypress,
  } = props;
  const classes = `resource-group__scroll${props.interfaceLeft && '--checkbox'} ${className && className}`;

  const itemsIds = [...props.itemsIds];
  const searchTitle = `Search ${filterName}`;
  let dropdownType = 'input';
  let outlined = false;
  if (selectedItemId) {
    dropdownType = 'primary';
    outlined = true;
  }

  return (
    <Dropdown
      wide
      disabled={props.disabled}
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
          <Input
            placeholder={searchTitle}
            className="search__input"
            onChange={handleSearch}
            initialValue={searchText}
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
      <div className="dropdown__menu__container dropdown-search-select__list-item__container">
        {itemsIds.length > 0 ? (
          <Scrollbars className={classes} autoHeight autoHeightMax={UtilitySystem.config.resourceSizes.large}>
            {renderListItems()}
          </Scrollbars>
        ) : (
          renderSearchHelp(itemsIds, itemSearchLoading)
        )}
      </div>
    </Dropdown>
  );
}

DropdownSearchSelect.propTypes = {
  dataCypress: PropTypes.string,
  fetchAllItems: PropTypes.func.isRequired,
  handleUpdateSelectedId: PropTypes.func.isRequired,
  itemsIds: PropTypes.array.isRequired,
  itemSearchLoading: PropTypes.bool.isRequired,
  selectedItemId: PropTypes.string,
  items: PropTypes.object.isRequired,
  dropdownLabel: PropTypes.string.isRequired,
  dropDownClass: PropTypes.string,
  filterName: PropTypes.string.isRequired,
  className: PropTypes.string,
  interfaceLeft: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DropdownSearchSelect;
