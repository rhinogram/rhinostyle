"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNotification = addNotification;
exports.removeNotification = removeNotification;

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionTypes = _constants.default.ActionTypes;

function addNotification(notification) {
  _dispatcher.default.handleViewAction({
    type: ActionTypes.ADD_NOTIFICATION,
    body: notification
  });
}

function removeNotification(id) {
  _dispatcher.default.handleViewAction({
    type: ActionTypes.REMOVE_NOTIFICATION,
    body: id
  });
}