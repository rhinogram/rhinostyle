"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = _interopRequireDefault(require("events"));

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ActionTypes = _constants.default.ActionTypes;
var CHANGE_EVENT = 'change';
var _notifications = [];
var _id = 0;

var NotificationStoreClass =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(NotificationStoreClass, _EventEmitter);

  function NotificationStoreClass() {
    _classCallCheck(this, NotificationStoreClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotificationStoreClass).apply(this, arguments));
  }

  _createClass(NotificationStoreClass, [{
    key: "emitChange",
    value: function emitChange() {
      this.emit(CHANGE_EVENT);
    }
  }, {
    key: "listen",
    value: function listen(callback) {
      this.on(CHANGE_EVENT, callback);
    }
  }, {
    key: "unlisten",
    value: function unlisten(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }, {
    key: "getState",
    value: function getState() {
      return {
        notifications: _notifications.slice()
      };
    }
  }]);

  return NotificationStoreClass;
}(_events.default);

var NotificationStore = new NotificationStoreClass();

function _addNotification(notification) {
  var _notification = Object.assign({}, notification, {
    id: _id += 1
  });

  _notifications.unshift(_notification);
}

function _removeNotification(id) {
  var index = _notifications.map(function (notification) {
    return notification.id;
  }).indexOf(id);

  if (index !== -1 && _notifications[index]) {
    var dismissEvent = _notifications[index].onDismiss;

    _notifications.splice(index, 1);

    if (dismissEvent) {
      dismissEvent();
    }
  }
}

NotificationStore.dispatchToken = _dispatcher.default.register(function (payload) {
  var action = payload.action;

  switch (action.type) {
    case ActionTypes.ADD_NOTIFICATION:
      _addNotification(action.body);

      break;

    case ActionTypes.REMOVE_NOTIFICATION:
      _removeNotification(action.body);

      break;

    default:
      return true;
  }

  NotificationStore.emitChange();
  return true;
});
var _default = NotificationStore;
exports.default = _default;