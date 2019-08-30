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

var BucketHeader = function BucketHeader(props) {
  var avatar = props.avatar,
      className = props.className,
      icon = props.icon,
      iconClassName = props.iconClassName,
      title = props.title;
  var classes = (0, _classnames.default)('bucket__header', className);
  var iconClasses = (0, _classnames.default)('bucket__header__title__icon', iconClassName);
  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("div", {
    className: "bucket__header__title"
  }, avatar ? _react.default.createElement(_.Avatar, {
    size: "small",
    name: props.avatar.name,
    type: props.avatar.type,
    image: props.avatar.image,
    className: "bucket__header__title__avatar"
  }) : null, icon ? _react.default.createElement(_.Icon, {
    icon: icon,
    className: iconClasses
  }) : null, title && title), props.children);
};

BucketHeader.propTypes = {
  avatar: _propTypes.default.shape({
    image: _propTypes.default.string,
    name: _propTypes.default.string,
    type: _propTypes.default.oneOf(['default', 'member'])
  }),
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  icon: _propTypes.default.string,
  iconClassName: _propTypes.default.string,
  title: _propTypes.default.string
};
var _default = BucketHeader;
exports.default = _default;