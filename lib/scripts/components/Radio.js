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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Radio = function Radio(props) {
  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      label = props.label,
      name = props.name,
      onChange = props.onChange,
      selectedValue = props.selectedValue,
      value = props.value;
  var id = "".concat(name, "-").concat(_.UtilitySystem.generateUUID());
  var classes = (0, _classnames.default)('rhinodio', className, _defineProperty({}, _.UtilitySystem.config.classes.disabled, disabled));
  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("input", {
    className: "rhinodio__input",
    type: "radio",
    disabled: disabled,
    name: name,
    value: value,
    id: id,
    checked: props.value === selectedValue,
    onChange: onChange
  }), label && _react.default.createElement("label", {
    // eslint-disable-line jsx-a11y/label-has-for
    className: "rhinodio__label",
    htmlFor: id
  }, label), props.value === selectedValue && children && _react.default.createElement("div", {
    className: "form__block-group__meta"
  }, children));
};

Radio.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  selectedValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
Radio.defaultProps = {
  disabled: false,
  onChange: function onChange() {
    return true;
  }
};
var _default = Radio;
exports.default = _default;