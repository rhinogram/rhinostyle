"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TabContentPane = function TabContentPane(props) {
  var className = props.className,
      active = props.active;
  var paneClasses = (0, _classnames.default)('tabs-content__pane', className, _defineProperty({}, _.UtilitySystem.config.classes.active, active));
  return _react.default.createElement("div", {
    className: paneClasses
  }, props.children);
};

TabContentPane.propTypes = {
  active: _propTypes.default.bool,
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
TabContentPane.defaultProps = {
  active: false
};
var _default = TabContentPane;
exports.default = _default;