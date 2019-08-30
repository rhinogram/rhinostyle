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

var NavTabsItem = function NavTabsItem(props) {
  var className = props.className,
      active = props.active,
      onClick = props.onClick;
  var itemClasses = (0, _classnames.default)('nav-tabs__item', className, _defineProperty({}, _.UtilitySystem.config.classes.active, active));
  var linkClasses = (0, _classnames.default)('nav-tabs__item__link', className);
  return _react.default.createElement("li", {
    className: itemClasses
  }, _react.default.createElement("div", {
    className: linkClasses,
    onClick: onClick
  }, props.children));
};

NavTabsItem.propTypes = {
  active: _propTypes.default.bool,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  onClick: _propTypes.default.func
};
NavTabsItem.defaultProps = {
  active: false,
  onClick: function onClick() {}
};
var _default = NavTabsItem;
exports.default = _default;