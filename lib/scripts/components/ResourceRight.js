"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResourceRight = function ResourceRight(props) {
  var children = props.children,
      noFlex = props.noFlex;
  var classes = (0, _classnames.default)('resource__right', {
    'resource__right--no-flex': noFlex
  });
  return _react.default.createElement("div", {
    className: classes
  }, children);
};

ResourceRight.propTypes = {
  children: _propTypes.default.node,
  noFlex: _propTypes.default.bool
};
var _default = ResourceRight;
exports.default = _default;