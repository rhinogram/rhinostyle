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

var Pill = function Pill(props) {
  var className = props.className,
      disabled = props.disabled,
      icon = props.icon,
      hideClose = props.hideClose,
      onClick = props.onClick,
      label = props.label,
      type = props.type;
  var classes = (0, _classnames.default)('pill', className, {
    'pill--default': type === 'default',
    'pill--primary': type === 'primary'
  });
  return _react.default.createElement(_.Button, {
    reset: true,
    className: classes,
    onClick: onClick,
    disabled: disabled
  }, icon && _react.default.createElement(_.Icon, {
    icon: icon,
    className: "pill__icon"
  }), " ", label, " ", !disabled && !hideClose && _react.default.createElement(_.Icon, {
    icon: "close",
    className: "pill__close"
  }));
};

Pill.propTypes = {
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.string,
  hideClose: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  label: _propTypes.default.string.isRequired,
  type: _propTypes.default.oneOf(['default', 'primary'])
};
Pill.defaultProps = {
  onClick: function onClick() {},
  type: 'default',
  hideClose: false
};
var _default = Pill;
exports.default = _default;