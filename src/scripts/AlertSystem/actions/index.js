import AlertDispatcher from '../dispatcher';
import AlertConstants  from '../constants';

const ActionTypes = AlertConstants.ActionTypes;

export function addAlert(alert) {
  AlertDispatcher.handleViewAction({
    type: ActionTypes.ADD_ALERT,
    body: alert
  });
};

export function removeAlert(id) {
  AlertDispatcher.handleViewAction({
    type: ActionTypes.REMOVE_ALERT,
    body: id
  });
};
