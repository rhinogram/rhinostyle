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
} from '../components';

class DropdownMultiSelectAdvanced extends React.Component {
  state = {
    searchText: '',
    isViewAllUsers: true,
  }

  sortSelectedItems = (a, b) => {
    // Sort the items by firstName
    const nameA = this.props.selectedUsers[a].firstName.toLowerCase();
    const nameB = this.props.selectedUsers[b].firstName.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    return 0;
  }

  handleUpdateSelectedIds = (id) => {
    let selectedIds = this.props.selectedUserIds;
    const { selectedUsers } = this.props;
    const selectedUser = this.props.users[id];

    const addAction = !selectedIds.includes(id);

    if (addAction) {
      selectedIds = selectedIds.concat(id);
      selectedUsers[id] = selectedUser;
    } else {
      selectedIds = selectedIds.filter(selectedId => selectedId !== id);
      delete selectedUsers[id];
    }
    if (selectedIds.length === 0) {
      this.setState({ isViewAllUsers: true });
    }
    this.props.handleUpdateSelectedIds(selectedIds, selectedUsers);
  }

  handleToggle = () => {
    if (this.state.isViewAllUsers) {
      this.setState({ searchText: '' });
      this.props.fetchUsersSearch('');
    }
    this.setState(prevState => ({ isViewAllUsers: !prevState.isViewAllUsers }));
  }

  handleClearAll = () => {
    this.setState({
      isViewAllUsers: true,
    });
    this.props.handleClearAllSelectedUsers();
  }

  handleSearch = (id, value) => {
    const { fetchUsersSearch } = this.props;
    const searchValue = value;

    fetchUsersSearch(searchValue);

    this.setState({ searchText: searchValue });
  };

  clearSearch = () => {
    this.setState({ searchText: '' });
    this.props.fetchUsersSearch('');
  }

  renderUserResource = (user, id, idx) => {
    const selected = this.props.selectedUserIds.includes(id);
    const profileImageUrl = user.profileImageUrl ? `${this.props.avatarBaseUrl}${user.profileImageUrl}` : '';
    const userName = `${user.firstName} ${user.lastName}`;
    return (
      <Resource selected={selected} key={idx} onClick={() => this.handleUpdateSelectedIds(id)}>
        <ResourceIntro
          avatar={{ image: profileImageUrl, name: UtilitySystem.formatAvatarName(user.firstName, user.lastName), type: 'member' }}
          title={userName}
        />
      </Resource>
    );
  };

  renderResourceUserSearch = (id, idx) => {
    const user = this.props.users[id];
    return this.renderUserResource(user, id, idx);
  };

  renderSearchHelp = (idArray = this.props.usersIds, loading = this.props.userSearchLoading) => {
    if ((this.state.searchText.length === 0 || this.state.searchText.length > 2) && loading) {
      return <div className="u-text-center"><LoaderPulse type="secondary" /></div>;
    } else if (this.state.searchText.length > 2 && !idArray.length && !loading) {
      return <div className="search__no-results">No results</div>;
    }

    return null;
  };

  renderUser = (id, idx) => {
    const user = this.props.selectedUsers[id];
    return this.renderUserResource(user, id, idx);
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
    const title = `View Selected (${this.props.selectedUserIds.length})`;
    return (
      <Button
        size="small"
        type="link"
        onClick={this.handleToggle}
        disabled={this.props.selectedUserIds.length === 0}
        title={title}
      >{title}
      </Button>
    );
  };

  renderViewSelectedUsers = () => (
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
        {this.props.selectedUserIds.length > 0 ? (
          <Scrollbars className="resource-group__scroll" autoHeight autoHeightMax={UtilitySystem.config.resourceSizes.large}>
            <ResourceGroup interfaceMode="checkbox">
              {this.props.selectedUserIds.sort(this.sortSelectedItems).map(this.renderUser)}
            </ResourceGroup>
          </Scrollbars>
        ) :
          'No Users Added'
        }
      </div>
    </Dropdown>
  );

  render() {
    const { userSearchLoading, openPanel, dropdownLabel, selectedUserIds, filterName } = this.props;
    const usersIds = [...this.props.usersIds];
    const searchTitle = `Search ${filterName}`;
    let returnValue = '';
    if (openPanel) {
      returnValue = (
        this.state.isViewAllUsers ?
          (
            <Dropdown wide autoFocusInput={false} label={dropdownLabel} onClick={this.clearSearch} type="outline-primary" disableScroll>
              <div className="dropdown__menu__container">
                <div className="search__group">
                  {selectedUserIds.length > 0 ? (
                    <UtilityInlineGrid className="u-flex u-flex-justify-between u-m-t-small u-text-small">
                      {this.renderClearButton()}
                      {this.renderViewSelected()}
                    </UtilityInlineGrid>)
                    :
                    <ResourceRight>
                      {this.renderViewSelected()}
                    </ResourceRight>
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
                {usersIds.length > 0 ? (
                  <Scrollbars className="resource-group__scroll" autoHeight autoHeightMax={UtilitySystem.config.resourceSizes.large}>
                    <ResourceGroup interfaceMode="checkbox">
                      {usersIds.map(this.renderResourceUserSearch)}
                    </ResourceGroup>
                  </Scrollbars>
                  ) :
                    this.renderSearchHelp(usersIds, userSearchLoading)
                  }
              </div>
            </Dropdown>
          ) :
          this.renderViewSelectedUsers()
      );
    }
    return returnValue;
  }
}

DropdownMultiSelectAdvanced.propTypes = {
  fetchUsersSearch: PropTypes.func.isRequired,
  handleUpdateSelectedIds: PropTypes.func.isRequired,
  handleClearAllSelectedUsers: PropTypes.func.isRequired,
  usersIds: PropTypes.array.isRequired,
  userSearchLoading: PropTypes.bool.isRequired,
  selectedUserIds: PropTypes.array.isRequired,
  selectedUsers: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  avatarBaseUrl: PropTypes.string.isRequired,
  openPanel: PropTypes.bool.isRequired,
  dropdownLabel: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default DropdownMultiSelectAdvanced;
