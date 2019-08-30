"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMenuScroll = function DropdownMenuScroll(props) {
  return _react.default.createElement("div", {
    className: "dropdown__menu__scroll"
  }, props.children);
};

DropdownMenuScroll.propTypes = {
  children: _propTypes.default.node
};
var _default = DropdownMenuScroll;
exports.default = _default;