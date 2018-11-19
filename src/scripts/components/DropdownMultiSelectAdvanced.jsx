import PropTypes from 'prop-types';
import React from 'react';
import {
  LoaderPulse,
  Input,
  Button,
  Icon,
  Resource,
  ResourceIntro,
  ResourceGroup,
  Scrollbars,
  UtilitySystem,
  Dropdown,
  UtilityInlineGrid,
  ResourceRight,
} from '.';

class DropdownMultiSelectAdvanced extends React.Component {
  state = {
    searchText: '',
    isViewAllItems: true,
  }

  handleUpdateSelectedIds = (id) => {
    let selectedIds = this.props.selectedItemsIds;
    const { selectedItems } = this.props;
    const selectedItem = this.props.items[id];

    const addAction = !selectedIds.includes(id);

    if (addAction) {
      selectedIds = selectedIds.concat(id);
      selectedItems[id] = selectedItem;
    } else {
      selectedIds = selectedIds.filter(selectedId => selectedId !== id);
      delete selectedItems[id];
    }
    if (selectedIds.length === 0) {
      this.setState({ isViewAllItems: true });
    }
    this.props.handleUpdateSelectedIds(selectedIds, selectedItems);
  }

  handleToggle = () => {
    if (this.state.isViewAllItems) {
      this.setState({ searchText: '' });
      this.props.fetchAllItems('');
    }
    this.setState(prevState => ({ isViewAllItems: !prevState.isViewAllItems }));
  }

  handleClearAll = () => {
    this.setState({
      isViewAllItems: true,
    });
    this.props.handleClearAllSelectedItems();
  }

  handleSearch = (id, value) => {
    const { fetchAllItems } = this.props;
    const searchValue = value;

    fetchAllItems(searchValue);

    this.setState({ searchText: searchValue });
  };

  clearSearch = () => {
    this.setState({ searchText: '' });
    this.props.fetchAllItems('');
  }

  renderListItems = (listItem, id, idx) => {
    const selected = this.props.selectedItemsIds.includes(id);
    let profileImageUrl = '';
    let avatarDetails = {};
    if (this.props.type === 'member') {
      profileImageUrl = listItem.profileImageUrl ? `${this.props.avatarBaseUrl}${listItem.profileImageUrl}` : '';
      avatarDetails = { image: profileImageUrl, name: listItem.name, type: 'member' };
    }
    return (
      <Resource selected={selected} key={idx} onClick={() => this.handleUpdateSelectedIds(id)}>
        {this.props.type === 'member' ? <ResourceIntro avatar={avatarDetails} title={listItem.title} />
          :
          listItem.title
        }
      </Resource>
    );
  };

  renderList = (id, idx) => {
    const item = this.props.items[id];
    return this.renderListItems(item, id, idx);
  };

  renderSearchHelp = (idArray = this.props.itemsIds, loading = this.props.itemSearchLoading) => {
    if ((this.state.searchText.length === 0 || this.state.searchText.length > 2) && loading) {
      return <div className="u-text-center"><LoaderPulse type="secondary" /></div>;
    } else if (this.state.searchText.length > 2 && !idArray.length && !loading) {
      return <div className="search__no-results">No results</div>;
    }

    return null;
  };

  renderSelectedItemsList = (id, idx) => {
    const item = this.props.selectedItems[id];
    return this.renderListItems(item, id, idx);
  };

  renderClearButton = () => (
    <Button
      size="small"
      type="link"
      onClick={this.handleClearAll}
      title="Clear All"
    >Clear All
    </Button>
  );

  renderViewSelected = () => {
    const title = `View Selected (${this.props.selectedItemsIds.length})`;
    return (
      <Button
        size="small"
        type="link"
        onClick={this.handleToggle}
        disabled={this.props.selectedItemsIds.length === 0}
        title={title}
      >{title}
      </Button>
    );
  };

  renderViewSelectedItems = () => (
    <Dropdown wide onClick={this.clearSearch} autoFocusInput={false} label={this.props.dropdownLabel} type="outline-primary" disableScroll>
      <div className="dropdown__menu__container">
        <div className="search__group">
          <UtilityInlineGrid className="u-flex u-flex-justify-between u-m-t-small u-text-small">
            {this.renderClearButton()}
            <div>
              <Button
                size="small"
                type="link"
                onClick={this.handleToggle}
                title="Back"
              >Back
              </Button>
            </div>
          </UtilityInlineGrid>
        </div>
        {this.props.selectedItemsIds.length > 0 ? (
          <Scrollbars className="resource-group__scroll" autoHeight autoHeightMax={UtilitySystem.config.resourceSizes.large}>
            <ResourceGroup interfaceMode="checkbox">
              {this.props.selectedItemsIds.map(this.renderSelectedItemsList)}
            </ResourceGroup>
          </Scrollbars>
        ) :
          'No items Added'
        }
      </div>
    </Dropdown>
  );

  render() {
    const { itemSearchLoading, dropdownLabel, selectedItemsIds, filterName } = this.props;
    const itemsIds = [...this.props.itemsIds];
    const searchTitle = `Search ${filterName}`;
    let returnValue = '';
    returnValue = (
      this.state.isViewAllItems ?
        (
          <Dropdown wide autoFocusInput={false} label={dropdownLabel} onClick={this.clearSearch} type="outline-primary" disableScroll>
            <div className="dropdown__menu__container">
              <div className="search__group">
                {selectedItemsIds.length > 0 ? (
                  <UtilityInlineGrid className="u-flex u-flex-justify-between u-m-t-small u-text-small">
                    {this.renderClearButton()}
                    {this.renderViewSelected()}
                  </UtilityInlineGrid>)
                  :
                  (
                    <ResourceRight>
                      {this.renderViewSelected()}
                    </ResourceRight>)
                }
                <Input
                  placeholder={searchTitle}
                  className="search__input"
                  onChange={this.handleSearch}
                  initialValue={this.state.searchText}
                  addon="left"
                  type="text"
                  name="preloadedMembers"
                  autoComplete="off"
                >
                  <Icon icon="search" />
                </Input>
              </div>
            </div>
            <div className="dropdown__menu__container">
              {itemsIds.length > 0 ? (
                <Scrollbars className="resource-group__scroll" autoHeight autoHeightMax={UtilitySystem.config.resourceSizes.large}>
                  <ResourceGroup interfaceMode="checkbox">
                    {itemsIds.map(this.renderList)}
                  </ResourceGroup>
                </Scrollbars>
              ) :
                this.renderSearchHelp(itemsIds, itemSearchLoading)
                }
            </div>
          </Dropdown>
        ) :
        this.renderViewSelectedItems()
    );
    return returnValue;
  }
}

DropdownMultiSelectAdvanced.propTypes = {
  fetchAllItems: PropTypes.func.isRequired,
  handleUpdateSelectedIds: PropTypes.func.isRequired,
  handleClearAllSelectedItems: PropTypes.func.isRequired,
  itemsIds: PropTypes.array.isRequired,
  itemSearchLoading: PropTypes.bool.isRequired,
  selectedItemsIds: PropTypes.array.isRequired,
  selectedItems: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  avatarBaseUrl: PropTypes.string,
  dropdownLabel: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default DropdownMultiSelectAdvanced;
