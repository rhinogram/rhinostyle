"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMenuHeader = function DropdownMenuHeader(props) {
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('dropdown__menu__header', props.className)
  }, props.label);
};

DropdownMenuHeader.propTypes = {
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired
};
var _default = DropdownMenuHeader;
exports.default = _default;