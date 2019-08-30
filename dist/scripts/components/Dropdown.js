"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function customValidator(props, propName, componentName) {
  if (props.icon && props.avatar) {
    return new Error("Only one of `avatar` or `icon` can be supplied to `".concat(componentName, "`."));
  } else if (props[propName]) {
    if (typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(props[propName], "` of type `").concat(_typeof(props[propName]), "` supplied to `").concat(componentName, "`, expected `string`."));
    }
  }

  return null;
}

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeKey: _this.props.activeKey,
      isOpen: false,
      hasFilter: false
    });

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var returnChild = null;
      var children = _this.props.children;
      return _react.default.Children.map(children, function (child) {
        if (!child) return null;

        if (child.type === _.DropdownMenuItem) {
          var onClick = function onClick() {
            if (child.props.id) {
              if (_this.props.onSelect) {
                _this.updateActiveKey(child.props.id);

                _this.props.onSelect(child.props.id);
              } else {
                _this.updateActiveKey(child.props.id);
              }
            }

            if (child.props.onClick) {
              child.props.onClick();
            }

            _this.handleToggle();
          };

          returnChild = _react.default.cloneElement(child, {
            onClick: onClick,
            active: _this.state.activeKey && child.props.id === _this.state.activeKey ? true : false // eslint-disable-line

          });
        } else if (child.type === _.DropdownFilter) {
          returnChild = _react.default.cloneElement(child, {
            onSelect: _this.props.onSelect,
            handleToggle: _this.handleToggle,
            activeKey: _this.state.activeKey,
            icon: _this.props.icon,
            updateActiveKey: _this.updateActiveKey
          });
        } else if (child.type === _.DropdownMenuItemWild) {
          returnChild = _react.default.cloneElement(child, {
            handleToggle: _this.handleToggle
          });
        } else {
          returnChild = child;
        }

        return returnChild;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggle", function () {
      var $dropdown = _reactDom.default.findDOMNode(_this.dropdown);

      if (_this.state.isOpen) {
        // Close dropdown
        $dropdown.timeline.reverse();
      } else {
        // Open dropdown
        $dropdown.timeline.play();
      } // Update state


      _this.setState({
        isOpen: !_this.state.isOpen
      });

      if (_this.props.onClick) {
        _this.props.onClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      var $dropdown = _reactDom.default.findDOMNode(_this.dropdown); // Close dropdown


      $dropdown.timeline.reverse();

      _this.setState({
        isOpen: false
      });

      if (_this.props.onClick) {
        _this.props.onClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateActiveKey", function (index) {
      if (_this.props.hideActive) {
        return;
      }

      _this.setState({
        activeKey: index
      });
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      // eslint-disable-line camelcase
      _react.default.Children.map(this.props.children, function (child) {
        if (!child) return;

        if (child.type === _.DropdownFilter) {
          _this2.setState({
            hasFilter: true
          });
        }
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      // eslint-disable-line camelcase
      if (newProps.activeKey !== this.props.activeKey) {
        this.setState({
          activeKey: newProps.activeKey
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          avatar = _this$props.avatar,
          autoFocusInput = _this$props.autoFocusInput,
          block = _this$props.block,
          className = _this$props.className,
          disabled = _this$props.disabled,
          disableScroll = _this$props.disableScroll,
          hideCaret = _this$props.hideCaret,
          label = _this$props.label,
          icon = _this$props.icon,
          lockLabel = _this$props.lockLabel,
          position = _this$props.position,
          reset = _this$props.reset,
          size = _this$props.size,
          title = _this$props.title,
          type = _this$props.type,
          wide = _this$props.wide,
          onStart = _this$props.onStart,
          onComplete = _this$props.onComplete,
          onReverseStart = _this$props.onReverseStart,
          onReverseComplete = _this$props.onReverseComplete,
          showOverflow = _this$props.showOverflow,
          wrapperClassName = _this$props.wrapperClassName,
          noChangeLabel = _this$props.noChangeLabel;
      var _this$state = this.state,
          activeKey = _this$state.activeKey,
          hasFilter = _this$state.hasFilter;
      var dropdownClasses = (0, _classnames.default)('dropdown', {
        'dropdown--block': block
      }, wrapperClassName);
      var dropdownToggleClasses = (0, _classnames.default)('dropdown__toggle', className);
      var dropdownMenuClasses = (0, _classnames.default)('dropdown__menu', {
        'dropdown__menu--right': position === 'right',
        'dropdown__menu--center': position === 'center',
        'dropdown__menu--top': position === 'top',
        'dropdown__menu--top dropdown__menu--right': position === 'top-right',
        'dropdown__menu--top dropdown__menu--center': position === 'top-center',
        'dropdown__menu--wide': wide
      });
      var selectedLabel = null;
      var selectedIcon = null;

      if (activeKey && !lockLabel) {
        _react.default.Children.forEach(this.props.children, function (child) {
          if (!child) return;

          if (child.type === _.DropdownMenuItem) {
            if (child.props.id === activeKey) {
              selectedLabel = child.props.label;
              selectedIcon = child.props.icon || child.props.labelIcon;
            }
          } else if (child.type === _.DropdownFilter) {
            _react.default.Children.forEach(child.props.children, function (filterChild) {
              if (filterChild.type === _.DropdownMenuItem) {
                if (filterChild.props.id === activeKey) {
                  selectedLabel = filterChild.props.label;
                  selectedIcon = filterChild.props.icon || child.props.labelIcon;
                }
              }
            });
          }
        });
      }

      var enableClickOutside = this.props.manualClose ? false : this.state.isOpen;

      var showLabel = function showLabel() {
        if (selectedLabel || label) {
          if (showOverflow) {
            return selectedLabel || label;
          }

          if (selectedLabel === noChangeLabel) {
            return label;
          }

          return _react.default.createElement("span", {
            className: "dropdown__toggle__text"
          }, selectedLabel || label);
        }

        return false;
      };

      return _react.default.createElement(_.DropdownWrapper, {
        autoFocusInput: autoFocusInput,
        className: dropdownClasses,
        handleClick: this.handleClickOutside,
        disableOnClickOutside: !enableClickOutside,
        enableOnClickOutside: enableClickOutside,
        onStart: onStart,
        onComplete: onComplete,
        onReverseComplete: onReverseComplete,
        onReverseStart: onReverseStart,
        ref: function ref(_ref) {
          return _this3.dropdown = _ref;
        }
      }, _react.default.createElement(_.Button, {
        reset: reset,
        size: size,
        iconOnly: icon && !label && !avatar,
        avatarOnly: avatar && !icon && !label,
        type: type,
        onClick: this.handleToggle,
        className: dropdownToggleClasses,
        disabled: disabled,
        title: title
      }, selectedIcon || icon ? _react.default.createElement(_.Icon, {
        className: "dropdown__toggle__icon",
        icon: selectedIcon || icon
      }) : null, avatar && _react.default.createElement(_.Avatar, {
        name: avatar.name,
        type: avatar.type,
        image: avatar.image,
        size: avatar.size,
        className: "app-header__avatar",
        onClick: this.handleToggle
      }), showLabel(), hideCaret || icon && avatar && !label && !selectedLabel ? null : _react.default.createElement(_.Icon, {
        size: "small",
        icon: "caret-down",
        className: "dropdown__toggle__caret"
      })), _react.default.createElement("div", {
        className: dropdownMenuClasses
      }, hasFilter || disableScroll ? this.getChildren() : _react.default.createElement(_.DropdownMenuScroll, null, this.getChildren())));
    }
  }]);

  return Dropdown;
}(_react.default.Component);

Dropdown.propTypes = {
  autoFocusInput: _propTypes.default.bool,
  activeKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  block: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  disableScroll: _propTypes.default.bool,
  hideCaret: _propTypes.default.bool,
  hideActive: _propTypes.default.bool,
  icon: customValidator,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  lockLabel: _propTypes.default.bool,
  position: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  reset: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'large']),
  title: _propTypes.default.string,
  type: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-primary', 'outline-reversed', 'link', 'link-muted', 'danger']),
  wide: _propTypes.default.bool,
  showOverflow: _propTypes.default.bool,
  onComplete: _propTypes.default.func,
  onReverseComplete: _propTypes.default.func,
  onReverseStart: _propTypes.default.func,
  onStart: _propTypes.default.func,
  manualClose: _propTypes.default.bool,
  wrapperClassName: _propTypes.default.string,
  noChangeLabel: _propTypes.default.string,
  avatar: _propTypes.default.shape({
    image: _propTypes.default.string,
    name: _propTypes.default.string,
    type: _propTypes.default.oneOf(['default', 'member'])
  })
};
Dropdown.defaultProps = {
  type: 'default',
  autoFocusInput: true
};
var _default = Dropdown;
exports.default = _default;