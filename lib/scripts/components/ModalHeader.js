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

var ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalHeader, _React$Component);

  function ModalHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "isDismissable", function () {
      var returnVal = null;

      if (_this.props.dismissable) {
        returnVal = _react.default.createElement("button", {
          onClick: _this.handleCloseClick,
          type: "button",
          className: "modal__header__close",
          "aria-label": "Close"
        }, _react.default.createElement(_.Icon, {
          icon: "close"
        }));
      }

      return returnVal;
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseClick", function () {
      _this.closeModal();
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dismissable = _this$props.dismissable,
          title = _this$props.title,
          titleSub = _this$props.titleSub;
      var classes = (0, _classnames.default)('modal__header');
      return _react.default.createElement("div", {
        className: classes
      }, dismissable ? _react.default.createElement(_.Close, {
        onClick: this.closeModal,
        className: "modal__header__close"
      }) : null, _react.default.createElement("div", {
        className: "modal__header__title-wrapper"
      }, _react.default.createElement("h3", {
        className: "modal__header__title"
      }, title), titleSub && _react.default.createElement("div", {
        className: "modal__header__subtitle"
      }, titleSub)));
    }
  }]);

  return ModalHeader;
}(_react.default.Component);

ModalHeader.propTypes = {
  dismissable: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  titleSub: _propTypes.default.string
};
ModalHeader.defaultProps = {
  dismissable: true
};
var _default = ModalHeader;
exports.default = _default;