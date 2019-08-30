"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResourceBody = function ResourceBody(props) {
  var className = props.className,
      children = props.children;
  var classes = (0, _classnames.default)('resource__body', className);
  return _react.default.createElement("div", {
    className: classes
  }, children);
};

ResourceBody.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = ResourceBody;
exports.default = _default;