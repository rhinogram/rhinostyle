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

var SystemAlert = function SystemAlert(props) {
  var body = props.body,
      children = props.children,
      className = props.className,
      closable = props.closable,
      icon = props.icon,
      onDismiss = props.onDismiss,
      type = props.type,
      url = props.url,
      urlText = props.urlText;
  var classes = (0, _classnames.default)('system-alert', className, {
    'system-alert--danger': type === 'danger',
    'system-alert--default': type === 'default',
    'system-alert--info': type === 'info',
    'system-alert--success': type === 'success'
  });

  var renderIcon = function renderIcon() {
    if (icon) {
      return _react.default.createElement(_.Icon, {
        icon: icon,
        className: "system-alert__icon"
      });
    }

    return false;
  };

  var renderUrl = function renderUrl() {
    if (url) {
      return _react.default.createElement("a", {
        href: url,
        className: "system-alert__link",
        target: "_blank",
        rel: "noopener noreferrer"
      }, urlText);
    }

    return false;
  };

  var renderBody = function renderBody() {
    var content = body;
    if (children) content = children;
    return content;
  };

  var renderClose = function renderClose() {
    var markup = '';
    if (closable) markup = _react.default.createElement(_.Close, {
      onClick: onDismiss,
      className: "system-alert__close"
    });
    return markup;
  };

  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("div", {
    className: "system-alert__body"
  }, renderIcon(), renderBody(), renderUrl()), renderClose());
};

SystemAlert.propTypes = {
  body: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  closable: _propTypes.default.bool,
  icon: _propTypes.default.string,
  onDismiss: _propTypes.default.func,
  type: _propTypes.default.oneOf(['danger', 'default', 'info', 'success']),
  url: _propTypes.default.string,
  urlText: _propTypes.default.string
};
SystemAlert.defaultProps = {
  closable: true,
  onDismiss: function onDismiss() {},
  type: 'default',
  urlText: 'More Information'
};
var _default = SystemAlert;
exports.default = _default;