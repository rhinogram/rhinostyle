import PropTypes from 'prop-types';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { UtilitySystem } from '../UtilitySystem';
import LoaderPulse from './LoaderPulse';
import Input from './Input';
import Icon from './Icon';
import Dropdown from './Dropdown';
import DropdownMenuItem from './DropdownMenuItem';

class DropdownSearchSelect extends React.Component {
  state = {
    searchText: '',
    isOpen: true,
  }

  handleSetIsOpen = (bool) => {
    this.setState({ isOpen: bool });
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

  handleSelect = (id) => {
    const selectedItemId = id;
    const selectedItem = this.props.items[id];
    this.props.handleUpdateSelectedId(selectedItemId, selectedItem, this.props.filterName.toLowerCase());
    this.handleSetIsOpen(false);
  };

  renderListItems = () => this.props.itemsIds.map((id) => {
    const listItem = this.props.items[id];
    return (
      <DropdownMenuItem
        key={id}
        id={id}
        label={listItem.title}
        active={this.props.selectedItemId === id}
        onClick={() => this.handleSelect(id)}
      />
    );
  });

  renderSearchHelp = (idArray = this.props.itemsIds, loading = this.props.itemSearchLoading) => {
    if ((this.state.searchText.length === 0 || this.state.searchText.length > 2) && loading) {
      return (
        <div className="u-text-center">
          <LoaderPulse type="secondary" />
        </div>
      );
    } else if (this.state.searchText.length > 2 && !idArray.length && !loading) {
      return <div className="search__no-results u-p-x">No results</div>;
    }

    return null;
  };

  render() {
    const {
      itemSearchLoading,
      dropdownLabel,
      selectedItemId,
      filterName,
      className,
      dropDownClass,
      dataCypress,
    } = this.props;
    const classes = `resource-group__scroll${this.props.interfaceLeft && '--checkbox'} ${className && className}`;

    const itemsIds = [...this.props.itemsIds];
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
        disabled={this.props.disabled}
        autoFocusInput={false}
        label={dropdownLabel}
        onClick={this.clearSearch}
        className={dropDownClass}
        type={dropdownType}
        outlined={outlined}
        dataCypress={dataCypress}
        disableScroll
        isOpen={this.state.isOpen}
        handleSetIsOpen={this.handleSetIsOpen}
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
              dataFeatureTag={searchTitle}
              autoComplete="off"
            >
              <Icon icon="search" />
            </Input>
          </div>
        </div>
        <div className="dropdown__menu__container u-p-x-0">
          {itemsIds.length > 0 ? (
            <Scrollbars className={classes} autoHeight autoHeightMax={UtilitySystem.config.resourceSizes.large}>
              {this.renderListItems()}
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
