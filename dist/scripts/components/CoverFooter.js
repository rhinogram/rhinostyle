"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoverFooter = function CoverFooter(props) {
  var children = props.children;
  return _react.default.createElement("div", {
    className: "cover__footer"
  }, _react.default.createElement("div", {
    className: "cover__footer__container"
  }, children));
};

CoverFooter.propTypes = {
  children: _propTypes.default.node
};
var _default = CoverFooter;
exports.default = _default;