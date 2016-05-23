import NotificationDispatcher   from '../dispatcher';
import * as NotificationActions from '../actions';
import NotificationConstants    from '../constants';

import EventEmitter from 'events';

const ActionTypes  = NotificationConstants.ActionTypes;
const CHANGE_EVENT = 'change';
let _notifications = [];
let _id            = 0;

class NotificationStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  listen(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  unlisten(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getState() {
    return {
      notifications: _notifications.slice()
    };
  }
}

const NotificationStore = new NotificationStoreClass();

function _addNotification(notification) {
  let _notification = Object.assign({}, notification, { id: _id++ });

  if (_notification.autoDismiss) {
    const autodismissTime = _notification.autodismissTime || 10000;

    const dismissFn = (function(notificationID) {
      return function() {
        _removeNotification(notificationID, true);
      };
    })(_notification.id);

    setTimeout(dismissFn, autodismissTime);
  }

  _notifications.unshift(_notification);

  if (_notification.onAdd) {
    _notification.onAdd(_notification.id);
  }
}

function _removeNotification(id, emitChange) {
  const index = _notifications.map(notification => notification.id).indexOf(id);

  if (index !== -1 && _notifications[index]) {
    const dismissEvent = _notifications[index].onDismiss;

    _notifications.splice(index, 1);

    if (dismissEvent) {
      dismissEvent();
    }

    if (emitChange) {
      NotificationStore.emitChange();
    }
  }
}

NotificationStore.dispatchToken = NotificationDispatcher.register((payload) => {
  const action = payload.action;

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

export default NotificationStore;
