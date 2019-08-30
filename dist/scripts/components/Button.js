"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadingRender", function () {
      var loaderSize = _this.props.size === 'small' ? 'xsmall' : 'small';
      return _react.default.createElement("div", {
        className: "button__loader"
      }, _react.default.createElement(_.LoaderCircle, {
        size: loaderSize
      }));
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _objectSpread2;

      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          className = _this$props.className,
          disabled = _this$props.disabled,
          iconOnly = _this$props.iconOnly,
          avatarOnly = _this$props.avatarOnly,
          onClick = _this$props.onClick,
          reset = _this$props.reset,
          route = _this$props.route,
          size = _this$props.size,
          title = _this$props.title,
          type = _this$props.type,
          url = _this$props.url,
          loading = _this$props.loading,
          hasClickableChildren = _this$props.hasClickableChildren,
          opts = _objectWithoutProperties(_this$props, ["active", "block", "className", "disabled", "iconOnly", "avatarOnly", "onClick", "reset", "route", "size", "title", "type", "url", "loading", "hasClickableChildren"]);

      var buttonBaseClass = reset ? 'button--reset' : 'button';
      var buttonStyleClasses = reset ? {
        'u-text-medium': size === 'large',
        // Match font-size for large button
        'u-text-small': size === 'small' // Match font-size for small button

      } : {
        'button--default': type === 'default',
        'button--primary': type === 'primary',
        'button--secondary': type === 'secondary',
        'button--link': type === 'link',
        'button--link-muted': type === 'link-muted',
        'button--outline-primary': type === 'outline-primary',
        'button--outline-reversed': type === 'outline-reversed',
        'button--accent': type === 'accent',
        'button--input': type === 'input',
        'button--danger': type === 'danger',
        'button--small': size === 'small',
        'button--large': size === 'large',
        'button--block': block,
        'button--icon': iconOnly,
        'button--avatar': avatarOnly,
        'button--checkbox': type === 'checkbox',
        'button--checkbox-muted': type === 'checkbox-muted'
      };
      var classes = (0, _classnames.default)(buttonBaseClass, className, _objectSpread({}, buttonStyleClasses, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _.UtilitySystem.config.classes.active, active), _defineProperty(_objectSpread2, _.UtilitySystem.config.classes.loading, loading), _objectSpread2)));
      var markup = '';

      if (url) {
        markup = _react.default.createElement("a", _extends({
          href: url,
          className: classes,
          onClick: this.handleClick
        }, opts, {
          title: this.props.title
        }), _react.default.createElement("span", {
          className: "button__text-wrapper"
        }, this.props.children));
      } else if (route) {
        markup = _react.default.createElement(_reactRouter.Link, _extends({
          to: route,
          className: classes,
          onClick: this.handleClick,
          disabled: disabled || loading
        }, opts, {
          title: this.props.title
        }), _react.default.createElement("span", {
          className: "button__text-wrapper"
        }, this.props.children), loading && this.loadingRender());
      } else if (hasClickableChildren) {
        markup = _react.default.createElement("div", _extends({
          className: classes,
          disabled: disabled || loading,
          onClick: this.handleClick,
          title: this.props.title
        }, opts), _react.default.createElement("span", {
          className: "button__text-wrapper"
        }, this.props.children), loading && this.loadingRender());
      } else {
        markup = _react.default.createElement("button", _extends({
          type: "button",
          className: classes,
          disabled: disabled || loading,
          onClick: this.handleClick,
          title: this.props.title
        }, opts), _react.default.createElement("span", {
          className: "button__text-wrapper"
        }, this.props.children), loading && this.loadingRender());
      }

      return markup;
    }
  }]);

  return Button;
}(_react.default.Component);

Button.propTypes = {
  active: _propTypes.default.bool,
  block: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  iconOnly: _propTypes.default.bool,
  avatarOnly: _propTypes.default.bool,
  reset: _propTypes.default.bool,
  route: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'large']),
  title: _propTypes.default.string,
  type: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'accent', 'input', 'outline-primary', 'outline-reversed', 'link', 'link-muted', 'danger', 'checkbox', 'checkbox-muted']),
  url: _propTypes.default.string,
  loading: _propTypes.default.bool,
  hasClickableChildren: _propTypes.default.bool
};
Button.defaultProps = {
  type: 'default'
};
var _default = Button;
exports.default = _default;