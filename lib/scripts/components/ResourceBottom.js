"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResourceBottom = function ResourceBottom(props) {
  var children = props.children,
      className = props.className;
  var classes = (0, _classnames.default)('resource__bottom', className);
  return children && _react.default.createElement("div", {
    className: classes
  }, children);
};

ResourceBottom.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = ResourceBottom;
exports.default = _default;