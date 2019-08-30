"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

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

var Resource =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Resource, _React$Component);

  function Resource() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Resource);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Resource)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var returnChild = null;
      var children = _this.props.children;
      return _react.default.Children.map(children, function (child) {
        if (!child) return null;

        if (child.type === _.ResourceBottom) {
          returnChild = null;
        } else {
          returnChild = child;
        }

        return returnChild;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getResourceBottomChildren", function () {
      var returnChild = null;
      var children = _this.props.children;
      return _react.default.Children.map(children, function (child) {
        if (!child) return null;

        if (child.type === _.ResourceBottom) {
          returnChild = child;
        } else {
          returnChild = null;
        }

        return returnChild;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hasRightColumn", function () {
      var children = _this.props.children;
      var rightColumnInstance = false;

      _react.default.Children.map(children, function (child) {
        if (child && child.type === _.ResourceRight) {
          rightColumnInstance = true;
        }
      });

      return rightColumnInstance;
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          unavailable = _this$props.unavailable;

      if (_this.props.onClick && !disabled && !unavailable) {
        _this.props.onClick();
      }
    });

    return _this;
  }

  _createClass(Resource, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props2 = this.props,
          className = _this$props2.className,
          active = _this$props2.active,
          disabled = _this$props2.disabled,
          selected = _this$props2.selected,
          interfaceMode = _this$props2.interfaceMode,
          unread = _this$props2.unread,
          wrapperClassName = _this$props2.wrapperClassName,
          unavailable = _this$props2.unavailable;
      var interfaceClass = interfaceMode === 'radio' ? 'radio' : 'checkbox';
      var wrapperClasses = (0, _classnames.default)('resource__wrapper', wrapperClassName, (_cx = {}, _defineProperty(_cx, _.UtilitySystem.config.classes.active, active && !interfaceMode), _defineProperty(_cx, 'is-unavailable', unavailable), _defineProperty(_cx, 'has-interface', interfaceMode && !unavailable), _defineProperty(_cx, "is-".concat(interfaceClass), interfaceMode), _defineProperty(_cx, 'is-selected', selected && !active), _defineProperty(_cx, 'is-unread', unread), _cx));
      var resourceClasses = (0, _classnames.default)('resource', className, {
        'has-right-column': this.hasRightColumn(),
        'resource--is-unavailable': unavailable
      });
      return _react.default.createElement("div", {
        role: "button",
        tabIndex: 0,
        className: wrapperClasses,
        onClick: this.handleClick,
        disabled: disabled
      }, _react.default.createElement("div", {
        className: resourceClasses
      }, this.getChildren()), this.getResourceBottomChildren());
    }
  }]);

  return Resource;
}(_react.default.Component);

Resource.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  // disables resource button completely.
  unavailable: _propTypes.default.bool,
  // hides the checkbox/radio and voids the click function. Still adds muted text styles to Intro and Body.
  active: _propTypes.default.bool,
  selected: _propTypes.default.bool,
  interfaceMode: _propTypes.default.oneOf(['radio', 'checkbox']),
  onClick: _propTypes.default.func,
  unread: _propTypes.default.bool,
  wrapperClassName: _propTypes.default.string
};
var _default = Resource;
exports.default = _default;