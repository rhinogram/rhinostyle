"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(props) {
  var className = props.className,
      bordered = props.bordered,
      condensed = props.condensed,
      hover = props.hover,
      striped = props.striped;
  var classes = (0, _classnames.default)('table', className, {
    'table--bordered': bordered,
    'table--condensed': condensed,
    'table--hover': hover,
    'table--striped': striped
  });
  return _react.default.createElement("div", {
    className: "responsive-table"
  }, _react.default.createElement("table", {
    className: classes
  }, props.children));
};

Table.propTypes = {
  bordered: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  condensed: _propTypes.default.bool,
  hover: _propTypes.default.bool,
  striped: _propTypes.default.bool
};
var _default = Table;
exports.default = _default;