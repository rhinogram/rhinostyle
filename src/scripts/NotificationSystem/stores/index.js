import NotificationDispatcher   from '../dispatcher';
import NotificationConstants    from '../constants';

import EventEmitter from 'events';

const ActionTypes    = NotificationConstants.ActionTypes;
const CHANGE_EVENT   = 'change';
const _notifications = [];
let _id              = 0;

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
      notifications: _notifications.slice(),
    };
  }
}

const NotificationStore = new NotificationStoreClass();

function _addNotification(notification) {
  const _notification = Object.assign({}, notification, { id: _id++ });

  _notifications.unshift(_notification);
}

function _removeNotification(id) {
  const index = _notifications.map(notification => notification.id).indexOf(id);

  if (index !== -1 && _notifications[index]) {
    const dismissEvent = _notifications[index].onDismiss;

    _notifications.splice(index, 1);

    if (dismissEvent) {
      dismissEvent();
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
