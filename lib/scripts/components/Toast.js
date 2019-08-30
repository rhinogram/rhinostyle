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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// This needs to be a proper component because we reference refs in other portions of the app
var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var _this$props = this.props,
          body = _this$props.body,
          className = _this$props.className,
          onDismiss = _this$props.onDismiss,
          type = _this$props.type;
      var classes = (0, _classnames.default)('toast', className, {
        'toast--danger': type === 'danger',
        'toast--default': type === 'default',
        'toast--success': type === 'success'
      });

      var renderIcon = function renderIcon() {
        var icon;
        var bump = null;

        switch (type) {
          case 'danger':
            icon = 'alert-triangle';
            bump = 'up';
            break;

          case 'success':
            icon = 'checkmark';
            break;

          default:
            icon = 'info-circle';
            break;
        }

        return _react.default.createElement(_.Icon, {
          icon: icon,
          bump: bump,
          className: "toast__icon"
        });
      };

      return _react.default.createElement("div", {
        role: "button",
        tabIndex: 0,
        className: classes,
        onClick: onDismiss
      }, renderIcon(), _react.default.createElement("div", {
        className: "toast__text"
      }, body), _react.default.createElement(_.Icon, {
        icon: "close",
        size: "small",
        className: "toast__close"
      }));
    }
  }]);

  return Toast;
}(_react.default.Component);

Toast.propTypes = {
  body: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  onDismiss: _propTypes.default.func,
  type: _propTypes.default.oneOf(['danger', 'default', 'success'])
};
Toast.defaultProps = {
  onDismiss: function onDismiss() {},
  type: 'default'
};
var _default = Toast;
exports.default = _default;