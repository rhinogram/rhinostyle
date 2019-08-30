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

var CoverHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CoverHeader, _React$Component);

  function CoverHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CoverHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CoverHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleCloseClick", function () {
      _this.closeCover();
    });

    _defineProperty(_assertThisInitialized(_this), "closeCover", function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(CoverHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          iconClassName = _this$props.iconClassName,
          title = _this$props.title;
      var iconClasses = (0, _classnames.default)('cover__header__title__icon', iconClassName);
      return _react.default.createElement("div", {
        className: "cover__header"
      }, _react.default.createElement("div", {
        className: "cover__header__container"
      }, _react.default.createElement("h4", {
        className: "cover__header__title"
      }, icon ? _react.default.createElement(_.Icon, {
        icon: icon,
        className: iconClasses
      }) : null, _react.default.createElement("span", {
        className: "u-text-overflow"
      }, title)), _react.default.createElement(_.Close, {
        className: "cover__header__close-button",
        onClick: this.handleCloseClick
      })));
    }
  }]);

  return CoverHeader;
}(_react.default.Component);

CoverHeader.propTypes = {
  icon: _propTypes.default.string,
  iconClassName: _propTypes.default.string,
  onClose: _propTypes.default.func,
  title: _propTypes.default.string
};
var _default = CoverHeader;
exports.default = _default;