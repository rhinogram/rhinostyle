"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMenuDivider = function DropdownMenuDivider(props) {
  return _react.default.createElement("div", {
    className: "dropdown__menu__divider"
  }, props.children);
};

DropdownMenuDivider.propTypes = {
  children: _propTypes.default.node
};
var _default = DropdownMenuDivider;
exports.default = _default;