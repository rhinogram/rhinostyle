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

var Label = function Label(props) {
  var className = props.className,
      icon = props.icon,
      iconBump = props.iconBump,
      label = props.label,
      type = props.type;
  var classes = (0, _classnames.default)('label', className, {
    'label--accent': type === 'accent',
    'label--danger': type === 'danger',
    'label--default': type === 'default',
    'label--secondary': type === 'secondary'
  });
  return _react.default.createElement("span", {
    className: classes
  }, icon ? _react.default.createElement(_.Icon, {
    icon: icon,
    bump: iconBump,
    className: "label__icon"
  }) : null, _react.default.createElement("span", null, label));
};

Label.propTypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.string,
  iconBump: _propTypes.default.oneOf(['down', 'up']),
  label: _propTypes.default.string.isRequired,
  type: _propTypes.default.oneOf(['accent', 'danger', 'default', 'secondary'])
};
Label.defaultProps = {
  type: 'default'
};
var _default = Label;
exports.default = _default;