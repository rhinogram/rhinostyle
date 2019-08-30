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

var DropdownMenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMenuItem, _React$Component);

  function DropdownMenuItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownMenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownMenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var returnVal = null;

      if (_this.props.url) {
        if (!_this.props.blankWindow) {
          window.location = _this.props.url;
        } else {
          window.open(_this.props.url);
        }

        returnVal = null;
      } else if (_this.props.onClick) {
        returnVal = _this.props.onClick();
      }

      return returnVal;
    });

    return _this;
  }

  _createClass(DropdownMenuItem, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          active = _this$props.active,
          avatar = _this$props.avatar,
          className = _this$props.className,
          disabled = _this$props.disabled,
          icon = _this$props.icon,
          label = _this$props.label,
          labelDesc = _this$props.labelDesc,
          route = _this$props.route,
          labelRaised = _this$props.labelRaised;
      var classes = (0, _classnames.default)('dropdown__menu__item', className, (_cx = {}, _defineProperty(_cx, _.UtilitySystem.config.classes.active, active), _defineProperty(_cx, _.UtilitySystem.config.classes.disabled, disabled), _cx));

      var renderContent = function renderContent() {
        return _react.default.createElement("div", {
          className: "dropdown__menu__item__content"
        }, avatar && _react.default.createElement(_.Avatar, {
          size: "small",
          name: avatar.name,
          type: avatar.type,
          image: avatar.image,
          className: "u-m-r-small"
        }), _react.default.createElement("div", {
          className: "dropdown__menu__item__content__container"
        }, _react.default.createElement("div", {
          className: "dropdown__menu__item__content__label"
        }, icon && _react.default.createElement(_.Icon, {
          icon: icon,
          className: "u-m-r-small"
        }), _react.default.createElement("span", {
          className: "u-text-overflow"
        }, label), labelRaised && _react.default.createElement("div", {
          className: "u-inline-block"
        }, _react.default.createElement("span", {
          className: "dropdown__menu__item__content__raised"
        }, labelRaised))), labelDesc && _react.default.createElement("div", {
          className: "dropdown__menu__item__content__desc"
        }, labelDesc)));
      };

      var markup = '';

      if (route) {
        markup = _react.default.createElement("div", {
          className: classes
        }, _react.default.createElement(_reactRouter.Link // eslint-disable-line jsx-a11y/anchor-is-valid
        , {
          to: route,
          className: "dropdown__menu__item__link",
          onClick: this.handleClick
        }, renderContent()));
      } else {
        markup = _react.default.createElement("div", {
          className: classes
        }, _react.default.createElement("a", {
          // eslint-disable-line jsx-a11y/anchor-is-valid
          href: "javascript:void(0)",
          className: "dropdown__menu__item__link",
          onClick: this.handleClick
        }, renderContent()));
      }

      return markup;
    }
  }]);

  return DropdownMenuItem;
}(_react.default.Component);

DropdownMenuItem.propTypes = {
  active: _propTypes.default.bool,
  avatar: _propTypes.default.shape({
    image: _propTypes.default.string,
    name: _propTypes.default.string,
    type: _propTypes.default.oneOf(['default', 'member'])
  }),
  blankWindow: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  icon: customValidator,
  label: _propTypes.default.any,
  labelDesc: _propTypes.default.any,
  route: _propTypes.default.string,
  url: _propTypes.default.string,
  labelRaised: _propTypes.default.any
};
var _default = DropdownMenuItem;
exports.default = _default;