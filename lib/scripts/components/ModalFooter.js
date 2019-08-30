"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalFooter = function ModalFooter(props) {
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('modal__footer')
  }, props.children);
};

ModalFooter.propTypes = {
  children: _propTypes.default.node
};
var _default = ModalFooter;
exports.default = _default;