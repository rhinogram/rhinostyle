"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _NotificationsContainer = _interopRequireDefault(require("./components/NotificationsContainer"));

var NotificationActions = _interopRequireWildcard(require("./actions"));

exports.NotificationActions = NotificationActions;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var notificationsContainer = document.getElementById('js-toasts-container');

  if (notificationsContainer) {
    _reactDom.default.render(_react.default.createElement(_NotificationsContainer.default, null), notificationsContainer); // eslint-disable-line react/jsx-filename-extension

  }
}, false); // eslint-disable-line import/prefer-default-export