"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _UtilitySystem = require("../UtilitySystem");

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

var DropdownMultiSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMultiSelect, _React$Component);

  function DropdownMultiSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownMultiSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownMultiSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeKeys: _this.props.activeKeys,
      isOpen: false,
      items: _this.props.children
    });

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var returnChild = null;
      var children = _this.props.children;
      return _react.default.Children.map(children, function (child) {
        if (child.type === _.DropdownMenuItem) {
          returnChild = _react.default.cloneElement(child, {
            onClick: function onClick() {
              return _this.itemClick(child.props.id, false);
            },
            active: _this.state.activeKeys.indexOf(child.props.id) > -1
          });
        } else {
          returnChild = child;
        }

        return returnChild;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearInput", function () {
      var $dropdown = _reactDom.default.findDOMNode(_this.dropdown); // Close dropdown


      $dropdown.timeline.reverse();

      _this.setState({
        isOpen: false
      });

      _this.filterInput.value = '';
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggle", function (e) {
      var $dropdown = _reactDom.default.findDOMNode(_this.dropdown); // If we're focusing on the input


      if (e.target.tagName === 'INPUT') {
        // If the dropdown is not already open
        if (!_this.state.isOpen) {
          // Open dropdown
          $dropdown.timeline.play();

          _this.setState({
            isOpen: true,
            items: _this.getChildren()
          });
        } // Leave input open if it's already there

      } else {
        // Handle everything else as normal
        if (_this.state.isOpen) {
          // Close dropdown
          $dropdown.timeline.reverse();
        } else {
          // Open dropdown
          $dropdown.timeline.play();
        }

        _this.setState({
          isOpen: !_this.state.isOpen,
          items: _this.getChildren()
        });

        _this.filterInput.value = '';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "itemClick", function (id, toggle) {
      if (_this.props.onSelect) {
        var _this$props;

        var result = _this.updateActiveKeys(id);

        (_this$props = _this.props).onSelect.apply(_this$props, _toConsumableArray(result));
      } else {
        _this.updateActiveKeys(id);
      }

      if (toggle) {
        _this.handleToggle();
      } else {
        _this.setState({
          items: _this.getChildren()
        });

        var $input = _this.filterInput;

        if ($input.value !== '') {
          // Mock event target
          _this.handleFilter({
            target: $input
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilter", function (e) {
      if (!_this.state.isOpen) {
        var $dropdown = _reactDom.default.findDOMNode(_this.dropdown); // Open dropdown


        $dropdown.timeline.play();

        _this.setState({
          isOpen: true
        });
      }

      var query = e.target.value;
      var items = [];
      var children = _this.props.children;

      _react.default.Children.forEach(children, function (child) {
        if (child.type === _.DropdownMenuItem) {
          var searchText = child.props.label;

          if (searchText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            items.push(_react.default.cloneElement(child, {
              onClick: function onClick() {
                return _this.itemClick(child.props.id, false);
              },
              active: _this.props.activeKeys.indexOf(child.props.id) > -1,
              key: child.props.id
            }));
          }
        }
      });

      _this.setState({
        items: items
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      _this.clearInput();
    });

    _defineProperty(_assertThisInitialized(_this), "updateActiveKeys", function (index) {
      var currentKeys = _this.state.activeKeys;
      var currentIndex = currentKeys.indexOf(index);
      var action = null;

      if (currentIndex > -1) {
        currentKeys.splice(currentIndex, 1);
        action = 'remove';
      } else {
        currentKeys.push(index);
        action = 'add';
      }

      _this.setState({
        activeKeys: currentKeys
      });

      return [action, index, currentKeys];
    });

    return _this;
  }

  _createClass(DropdownMultiSelect, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      // eslint-disable-line camelcase
      var activeKeysHaveChanged = !_UtilitySystem.UtilitySystem.compareFlatArray(this.props.activeKeys, nextProps.activeKeys);

      if (activeKeysHaveChanged) {
        this.setState({
          activeKeys: nextProps.activeKeys
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          block = _this$props2.block,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          explanationMessage = _this$props2.explanationMessage,
          placeholder = _this$props2.placeholder,
          position = _this$props2.position,
          wide = _this$props2.wide,
          validationMessage = _this$props2.validationMessage;
      var _this$state = this.state,
          items = _this$state.items,
          activeKeys = _this$state.activeKeys,
          isOpen = _this$state.isOpen;
      var dropdownClasses = (0, _classnames.default)('dropdown', 'dropdown--multiselect', {
        'dropdown--block': block
      });
      var dropdownToggleClasses = (0, _classnames.default)('dropdown__input', 'form__control', 'form__control--chevron', {
        'form__control--error': validationMessage
      });
      var dropdownMenuClasses = (0, _classnames.default)('dropdown__menu', {
        'dropdown__menu--right': position === 'right',
        'dropdown__menu--top': position === 'top',
        'dropdown__menu--top dropdown__menu--right': position === 'top-right',
        'dropdown__menu--wide': wide
      });

      var renderPill = function renderPill(id) {
        var icon = '';
        var label = ''; // Figure out label

        _react.default.Children.forEach(children, function (child) {
          if (child.type === _.DropdownMenuItem && child.props.id === id) {
            var _child$props = child.props;
            icon = _child$props.icon;
            label = _child$props.label;
          }
        });

        return _react.default.createElement(_.Pill, {
          type: "primary",
          label: label,
          icon: icon,
          onClick: function onClick() {
            return _this2.itemClick(id);
          },
          key: id
        });
      };

      return _react.default.createElement("div", {
        className: "form__group"
      }, _react.default.createElement(_.DropdownWrapper, {
        className: dropdownClasses,
        handleClick: this.handleClickOutside,
        disableOnClickOutside: !isOpen,
        enableOnClickOutside: isOpen,
        ref: function ref(_ref2) {
          return _this2.dropdown = _ref2;
        }
      }, _react.default.createElement("input", {
        onClick: this.handleToggle,
        ref: function ref(_ref) {
          return _this2.filterInput = _ref;
        },
        type: "text",
        className: dropdownToggleClasses,
        placeholder: placeholder,
        onChange: this.handleFilter,
        disabled: disabled
      }), _react.default.createElement("div", {
        className: dropdownMenuClasses
      }, _react.default.createElement(_.DropdownMenuScroll, null, items.length > 0 ? items : _react.default.createElement(_.DropdownMenuHeader, {
        label: "No results"
      })))), _react.default.createElement(_.FormValidationMessage, {
        validationMessage: validationMessage
      }), _react.default.createElement(_.FormExplanationMessage, {
        explanationMessage: explanationMessage
      }), activeKeys.length && _react.default.createElement("div", {
        className: "u-p-t-small"
      }, _react.default.createElement(_.UtilityInlineGrid, null, activeKeys.map(renderPill))));
    }
  }]);

  return DropdownMultiSelect;
}(_react.default.Component);

DropdownMultiSelect.propTypes = {
  activeKeys: _propTypes.default.arrayOf(_propTypes.default.number),
  block: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  disabled: _propTypes.default.bool,
  explanationMessage: _propTypes.default.string,
  onSelect: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  position: _propTypes.default.string,
  wide: _propTypes.default.bool,
  validationMessage: _propTypes.default.string
};
DropdownMultiSelect.defaultProps = {
  activeKeys: [],
  placeholder: 'Click or type to select more ...'
};
var _default = DropdownMultiSelect;
exports.default = _default;