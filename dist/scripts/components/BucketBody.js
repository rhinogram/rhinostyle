"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BucketBody = function BucketBody(props) {
  var className = props.className;
  var classes = (0, _classnames.default)('bucket__body', className);
  return _react.default.createElement("div", {
    className: classes
  }, props.children);
};

BucketBody.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = BucketBody;
exports.default = _default;