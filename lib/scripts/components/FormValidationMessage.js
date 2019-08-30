"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormValidationMessage = function FormValidationMessage(props) {
  var validationMessage = props.validationMessage;
  return validationMessage ? _react.default.createElement("div", {
    className: "form__validation-message"
  }, validationMessage) : null;
};

FormValidationMessage.propTypes = {
  validationMessage: _propTypes.default.string
};
var _default = FormValidationMessage;
exports.default = _default;