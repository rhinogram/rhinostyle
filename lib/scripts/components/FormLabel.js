"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormLabel = function FormLabel(props) {
  var children = props.children,
      className = props.className,
      id = props.id,
      required = props.required;
  var classes = (0, _classnames.default)(className);
  return children ? _react.default.createElement("label", {
    // eslint-disable-line jsx-a11y/label-has-for
    htmlFor: id,
    className: classes
  }, children, " ", required && _react.default.createElement("span", {
    className: "form__asterisk"
  }, "*")) : null;
};

FormLabel.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  id: _propTypes.default.string.isRequired,
  required: _propTypes.default.bool
};
var _default = FormLabel;
exports.default = _default;