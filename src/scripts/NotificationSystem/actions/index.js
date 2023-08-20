import NotificationDispatcher from '../dispatcher';
import NotificationConstants from '../constants';

const { ActionTypes } = NotificationConstants;

export function addNotification(notification) {
  NotificationDispatcher.handleViewAction({
    type: ActionTypes.ADD_NOTIFICATION,
    body: notification,
    subText: notification?.subText || '',
  });
}

export function removeNotification(id) {
  NotificationDispatcher.handleViewAction({
    type: ActionTypes.REMOVE_NOTIFICATION,
    body: id,
  });
}
