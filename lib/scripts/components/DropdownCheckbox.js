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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropdownCheckbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownCheckbox, _React$Component);

  function DropdownCheckbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownCheckbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeKey: _this.props.activeKey,
      isOpen: false,
      hasFilter: false,
      isCheckbox: _this.props.isCheckbox,
      checked: _this.props.isChecked
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

      var isOpen = _this.state.isOpen;

      if (isOpen) {
        // Close dropdown
        $dropdown.timeline.reverse();
      } else {
        // Open dropdown
        $dropdown.timeline.play();
      } // Update state


      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
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

  _createClass(DropdownCheckbox, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.activeKey !== this.props.activeKey) {
        this.setState({
          activeKey: newProps.activeKey
        });
      }

      if (newProps.isChecked !== this.props.isChecked) {
        this.setState({
          checked: newProps.isChecked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
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
          showAssociatedLabel = _this$props.showAssociatedLabel,
          checkboxClassName = _this$props.checkboxClassName;
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
        var labelValueAssociated = _this3.props.labelValueAssociated;

        if (showAssociatedLabel) {
          return _react.default.createElement("span", {
            className: "dropdown__toggle__text",
            onClick: _this3.handleToggle
          }, labelValueAssociated);
        }

        if (selectedLabel || label) {
          if (showOverflow) {
            return selectedLabel || label;
          }

          return _react.default.createElement("span", {
            className: "dropdown__toggle__text",
            onClick: _this3.handleToggle
          }, selectedLabel || label);
        }

        return false;
      };

      var showCheckbox = function showCheckbox() {
        var _this3$state = _this3.state,
            isCheckbox = _this3$state.isCheckbox,
            checked = _this3$state.checked;
        var onChange = _this3.props.onChange; // Appending IE10/11 specific class for proper checkbox alignment.

        var checkboxClasses = checkboxClassName ? "".concat(checkboxClassName, " rhinobox__label--ie11") : 'rhinobox__label--ie11';

        if (isCheckbox) {
          return _react.default.createElement(_.Checkbox, {
            name: "test",
            label: " ",
            isChecked: checked,
            onChange: onChange,
            className: checkboxClasses
          });
        }

        return false;
      };

      return _react.default.createElement(_.DropdownWrapper, {
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
        iconOnly: icon && !label,
        type: type,
        className: dropdownToggleClasses,
        disabled: disabled,
        title: title,
        hasClickableChildren: true
      }, (selectedIcon || icon) && _react.default.createElement(_.Icon, {
        className: "dropdown__toggle__icon",
        icon: selectedIcon || icon
      }), showCheckbox(), _react.default.createElement(_.Button, {
        reset: true,
        hasClickableChildren: true
      }, hideCaret || icon && !label && !selectedLabel ? null : // This icon needs to be wrapped in a <Button/>, because IE11 will only fire onClick event on the actual path of an SVG
      // and not it's container. If we remove the <Button/> wrapper and just use the <Icon/>, it's near impossible to click it.
      _react.default.createElement(_.Button, {
        reset: true,
        onClick: this.handleToggle
      }, _react.default.createElement(_.Icon, {
        size: "small",
        icon: "caret-down",
        className: "dropdown__toggle__caret"
      })), showLabel())), _react.default.createElement("div", {
        className: dropdownMenuClasses
      }, hasFilter || disableScroll ? this.getChildren() : _react.default.createElement(_.DropdownMenuScroll, null, this.getChildren())));
    }
  }]);

  return DropdownCheckbox;
}(_react.default.Component);

DropdownCheckbox.propTypes = {
  activeKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  block: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  disableScroll: _propTypes.default.bool,
  hideCaret: _propTypes.default.bool,
  hideActive: _propTypes.default.bool,
  icon: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  lockLabel: _propTypes.default.bool,
  position: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  reset: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'large']),
  title: _propTypes.default.string,
  type: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-primary', 'outline-reversed', 'link', 'link-muted', 'danger', 'checkbox', 'checkbox-muted']),
  wide: _propTypes.default.bool,
  showOverflow: _propTypes.default.bool,
  showAssociatedLabel: _propTypes.default.bool,
  onComplete: _propTypes.default.func,
  onReverseComplete: _propTypes.default.func,
  onReverseStart: _propTypes.default.func,
  onStart: _propTypes.default.func,
  manualClose: _propTypes.default.bool,
  wrapperClassName: _propTypes.default.string,
  isCheckbox: _propTypes.default.bool,
  checkboxClassName: _propTypes.default.string,
  isChecked: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  labelValueAssociated: _propTypes.default.string
};
DropdownCheckbox.defaultProps = {
  type: 'default',
  isChecked: false
};
var _default = DropdownCheckbox;
exports.default = _default;