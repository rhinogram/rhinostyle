"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropdownMultiSelectAdvanced =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMultiSelectAdvanced, _React$Component);

  function DropdownMultiSelectAdvanced() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownMultiSelectAdvanced);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownMultiSelectAdvanced)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      searchText: '',
      isViewAllItems: true
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdateSelectedIds", function (id) {
      var selectedIds = _this.props.selectedItemsIds;
      var selectedItems = _this.props.selectedItems;
      var selectedItem = _this.props.items[id];
      var addAction = !selectedIds.includes(id);

      if (addAction) {
        selectedIds = selectedIds.concat(id);
        selectedItems[id] = selectedItem;
      } else {
        selectedIds = selectedIds.filter(function (selectedId) {
          return selectedId !== id;
        });
        delete selectedItems[id];
      }

      if (selectedIds.length === 0) {
        _this.setState({
          isViewAllItems: true
        });
      }

      _this.props.handleUpdateSelectedIds(selectedIds, selectedItems, _this.props.filterName.toLowerCase());
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggle", function () {
      if (_this.state.isViewAllItems && _this.state.searchText.length > 0) {
        _this.setState({
          searchText: ''
        });

        _this.props.fetchAllItems('', _this.props.filterName.toLowerCase());
      }

      _this.setState(function (prevState) {
        return {
          isViewAllItems: !prevState.isViewAllItems
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearAll", function () {
      _this.setState({
        isViewAllItems: true
      });

      _this.props.handleClearAllSelectedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (id, value) {
      var fetchAllItems = _this.props.fetchAllItems;
      var searchValue = value;
      if (searchValue.length > 2 || searchValue.length === 0) fetchAllItems(searchValue, _this.props.filterName.toLowerCase());

      _this.setState({
        searchText: searchValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearSearch", function () {
      if (_this.state.searchText.length > 0) {
        _this.setState({
          searchText: ''
        });

        _this.props.fetchAllItems('', _this.props.filterName.toLowerCase());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderListItems", function (listItem, id, idx) {
      var selected = _this.props.selectedItemsIds.includes(id);

      var profileImageUrl = '';
      var avatarDetails = {};

      if (_this.props.type === 'member') {
        profileImageUrl = listItem.profileImageUrl ? "".concat(_this.props.avatarBaseUrl).concat(listItem.profileImageUrl) : '';
        avatarDetails = {
          image: profileImageUrl,
          name: listItem.name,
          type: 'member'
        };
      }

      return _react.default.createElement(_.Resource, {
        selected: selected,
        key: idx,
        onClick: function onClick() {
          return _this.handleUpdateSelectedIds(id);
        }
      }, _this.props.type === 'member' ? _react.default.createElement(_.ResourceIntro, {
        avatar: avatarDetails,
        title: listItem.title
      }) : listItem.title);
    });

    _defineProperty(_assertThisInitialized(_this), "renderList", function (id, idx) {
      var item = _this.props.items[id];
      return _this.renderListItems(item, id, idx);
    });

    _defineProperty(_assertThisInitialized(_this), "renderSearchHelp", function () {
      var idArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.itemsIds;
      var loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.itemSearchLoading;

      if ((_this.state.searchText.length === 0 || _this.state.searchText.length > 2) && loading) {
        return _react.default.createElement("div", {
          className: "u-text-center"
        }, _react.default.createElement(_.LoaderPulse, {
          type: "secondary"
        }));
      } else if (_this.state.searchText.length > 2 && !idArray.length && !loading) {
        return _react.default.createElement("div", {
          className: "search__no-results"
        }, "No results");
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectedItemsList", function (id, idx) {
      var item = _this.props.selectedItems[id];
      return _this.renderListItems(item, id, idx);
    });

    _defineProperty(_assertThisInitialized(_this), "renderClearButton", function () {
      return _react.default.createElement(_.Button, {
        size: "small",
        type: "link",
        onClick: _this.handleClearAll,
        title: "Clear All"
      }, "Clear All");
    });

    _defineProperty(_assertThisInitialized(_this), "renderViewSelected", function () {
      var title = "View Selected (".concat(_this.props.selectedItemsIds.length, ")");
      return _react.default.createElement(_.Button, {
        size: "small",
        type: "link",
        onClick: _this.handleToggle,
        disabled: _this.props.selectedItemsIds.length === 0,
        title: title
      }, title);
    });

    _defineProperty(_assertThisInitialized(_this), "renderViewSelectedItems", function (classes, dropdownType) {
      return _react.default.createElement(_.Dropdown, {
        wide: true,
        onClick: _this.clearSearch,
        autoFocusInput: false,
        label: _this.props.dropdownLabel,
        className: _this.props.dropDownClass,
        type: dropdownType,
        disableScroll: true
      }, _react.default.createElement("div", {
        className: "dropdown__menu__container"
      }, _react.default.createElement("div", {
        className: "search__group"
      }, _react.default.createElement(_.UtilityInlineGrid, {
        className: "u-flex u-flex-justify-between u-m-t-small u-text-small"
      }, _this.renderClearButton(), _react.default.createElement("div", null, _react.default.createElement(_.Button, {
        size: "small",
        type: "link",
        onClick: _this.handleToggle,
        title: "Back"
      }, "Back")))), _this.props.selectedItemsIds.length > 0 ? _react.default.createElement(_.Scrollbars, {
        className: classes,
        autoHeight: true,
        autoHeightMax: _.UtilitySystem.config.resourceSizes.large
      }, _react.default.createElement(_.ResourceGroup, {
        interfaceMode: "checkbox"
      }, _this.props.selectedItemsIds.map(_this.renderSelectedItemsList))) : 'No items Added'));
    });

    return _this;
  }

  _createClass(DropdownMultiSelectAdvanced, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          itemSearchLoading = _this$props.itemSearchLoading,
          dropdownLabel = _this$props.dropdownLabel,
          selectedItemsIds = _this$props.selectedItemsIds,
          filterName = _this$props.filterName,
          className = _this$props.className,
          dropDownClass = _this$props.dropDownClass;
      var classes = 'resource-group__scroll';

      if (className) {
        classes = "resource-group__scroll ".concat(className);
      }

      var itemsIds = _toConsumableArray(this.props.itemsIds);

      var searchTitle = "Search ".concat(filterName); // let returnValue = '';

      var dropdownType = 'input';

      if (selectedItemsIds.length > 0) {
        dropdownType = 'outline-primary';
      }

      return this.state.isViewAllItems ? _react.default.createElement(_.Dropdown, {
        wide: true,
        autoFocusInput: false,
        label: dropdownLabel,
        onClick: this.clearSearch,
        className: dropDownClass,
        type: dropdownType,
        disableScroll: true
      }, _react.default.createElement("div", {
        className: "dropdown__menu__container"
      }, _react.default.createElement("div", {
        className: "search__group"
      }, selectedItemsIds.length > 0 ? _react.default.createElement(_.UtilityInlineGrid, {
        className: "u-flex u-flex-justify-between u-m-t-small u-text-small"
      }, this.renderClearButton(), this.renderViewSelected()) : _react.default.createElement(_.ResourceRight, null, this.renderViewSelected()), _react.default.createElement(_.Input, {
        placeholder: searchTitle,
        className: "search__input",
        onChange: this.handleSearch,
        initialValue: this.state.searchText,
        addon: "left",
        type: "text",
        name: "preloadedMembers",
        autoComplete: "off"
      }, _react.default.createElement(_.Icon, {
        icon: "search"
      })))), _react.default.createElement("div", {
        className: "dropdown__menu__container"
      }, itemsIds.length > 0 ? _react.default.createElement(_.Scrollbars, {
        className: classes,
        autoHeight: true,
        autoHeightMax: _.UtilitySystem.config.resourceSizes.large
      }, _react.default.createElement(_.ResourceGroup, {
        interfaceMode: "checkbox"
      }, itemsIds.map(this.renderList))) : this.renderSearchHelp(itemsIds, itemSearchLoading))) : this.renderViewSelectedItems(classes, dropdownType);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.selectedItemsIds.length === 0) {
        return {
          isViewAllItems: true
        };
      }

      return null;
    }
  }]);

  return DropdownMultiSelectAdvanced;
}(_react.default.Component);

DropdownMultiSelectAdvanced.propTypes = {
  fetchAllItems: _propTypes.default.func.isRequired,
  handleUpdateSelectedIds: _propTypes.default.func.isRequired,
  handleClearAllSelectedItems: _propTypes.default.func.isRequired,
  itemsIds: _propTypes.default.array.isRequired,
  itemSearchLoading: _propTypes.default.bool.isRequired,
  selectedItemsIds: _propTypes.default.array.isRequired,
  selectedItems: _propTypes.default.object.isRequired,
  items: _propTypes.default.object.isRequired,
  avatarBaseUrl: _propTypes.default.string,
  dropdownLabel: _propTypes.default.string.isRequired,
  dropDownClass: _propTypes.default.string,
  filterName: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
var _default = DropdownMultiSelectAdvanced;
exports.default = _default;