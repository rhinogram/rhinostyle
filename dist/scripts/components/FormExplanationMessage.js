"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormExplanationMessage = function FormExplanationMessage(props) {
  var explanationMessage = props.explanationMessage;
  return explanationMessage ? _react.default.createElement("div", {
    className: "form__explanation-message"
  }, explanationMessage) : null;
};

FormExplanationMessage.propTypes = {
  explanationMessage: _propTypes.default.string
};
var _default = FormExplanationMessage;
exports.default = _default;