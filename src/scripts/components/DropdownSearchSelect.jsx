/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { UtilitySystem } from '../UtilitySystem';
import LoaderPulse from './LoaderPulse';
import Input from './Input';
import Icon from './Icon';
import Resource from './Resource';
import ResourceIntro from './ResourceIntro';
import ResourceGroup from './ResourceGroup';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

function DropdownSearchSelect(props) {
  const [searchText, setSearchText] = useState('');

  const handleUpdateSelectedId = (id) => {
    let selectedItemId = id
    let selectedItem = props.items[id]

    if (props.selectedItemId) {
      if (id === props.selectedItemId) {
        selectedItem = null
        selectedItemId = null
      }
    }

    props.handleUpdateSelectedId(selectedItemId, selectedItem, props.filterName.toLowerCase());
  }

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

  const renderListItems = (listItem, id) => {
    const selected = props.selectedItemId === id;
    let profileImageUrl = '';
    let avatarDetails = {};
    if (props.type === 'member') {
      profileImageUrl = listItem.profileImageUrl ? `${props.avatarBaseUrl}${listItem.profileImageUrl}` : '';
      avatarDetails = { image: profileImageUrl, name: listItem.name, type: 'member' };
    }
    if (props.interfaceLeft) {
      return (
        <Checkbox
          key={id}
          isChecked={selected}
          onChange={() => handleUpdateSelectedId(id)}
          name={listItem.title}
          label={listItem.title}
          interfaceLeft={props.interfaceLeft}
        />
      );
    } else {
      return (
        <Resource selected={selected} key={id} onClick={() => handleUpdateSelectedId(id)} interfaceLeft={props.interfaceLeft}>
          {props.type === 'member' ? (
            <ResourceIntro avatar={avatarDetails} title={listItem.memberName ? listItem.memberName : listItem.title} />
          ) : (
            listItem.title
          )}
        </Resource>
      );
    }
  };

  const renderList = (id, idx) => {
    const item = props.items[id];
    return renderListItems(item, id, idx);
  };

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
      <div className="dropdown__menu__container">
        {itemsIds.length > 0 ? (
          <Scrollbars className={classes} autoHeight autoHeightMax={UtilitySystem.config.resourceSizes.large}>
            {props.interfaceLeft ? (
              <CheckboxGroup blockGroup>{itemsIds.map(renderList)}</CheckboxGroup>
            ) : (
              <ResourceGroup interfaceMode="checkbox">{itemsIds.map(renderList)}</ResourceGroup>
            )}
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
  selectedItem: PropTypes.object,
  items: PropTypes.object.isRequired,
  avatarBaseUrl: PropTypes.string,
  dropdownLabel: PropTypes.string.isRequired,
  dropDownClass: PropTypes.string,
  filterName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  interfaceLeft: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DropdownSearchSelect;
