"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bucket = function Bucket(props) {
  var className = props.className,
      type = props.type;
  var classes = (0, _classnames.default)('bucket', className, {
    'bucket--default': type === 'default'
  });
  return _react.default.createElement("div", {
    className: classes
  }, props.children);
};

Bucket.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  type: _propTypes.default.oneOf(['default'])
};
Bucket.defaultProps = {
  type: 'default'
};
var _default = Bucket;
exports.default = _default;