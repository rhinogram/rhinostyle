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

var Alert = function Alert(props) {
  var className = props.className,
      onDismiss = props.onDismiss,
      solid = props.solid,
      title = props.title,
      titleIcon = props.titleIcon,
      type = props.type;
  var classes = (0, _classnames.default)('alert', className, {
    'alert--danger': type === 'danger',
    'alert--default': type === 'default',
    'alert--info': type === 'info',
    'alert--success': type === 'success',
    'alert--warning': type === 'warning',
    'alert--dismissible': onDismiss,
    'alert--solid': solid
  });

  var renderClose = function renderClose() {
    if (onDismiss) {
      return _react.default.createElement(_.Close, {
        onClick: onDismiss,
        className: "alert__close"
      });
    }

    return false;
  };

  var renderTitleIcon = function renderTitleIcon() {
    if (titleIcon) {
      return _react.default.createElement(_.Icon, {
        icon: titleIcon,
        className: "alert__title__icon"
      });
    }

    return false;
  };

  return _react.default.createElement("div", {
    className: classes
  }, renderClose(), title && _react.default.createElement("div", {
    className: "alert__title"
  }, renderTitleIcon(), _react.default.createElement("div", {
    className: "alert__title__text"
  }, title)), _react.default.createElement("div", {
    className: "alert__body"
  }, props.children));
};

Alert.propTypes = {
  className: _propTypes.default.string,
  onDismiss: _propTypes.default.func,
  title: _propTypes.default.string,
  titleIcon: _propTypes.default.string,
  children: _propTypes.default.node,
  solid: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['danger', 'default', 'info', 'success', 'warning'])
};
Alert.defaultProps = {
  type: 'default'
};
var _default = Alert;
exports.default = _default;