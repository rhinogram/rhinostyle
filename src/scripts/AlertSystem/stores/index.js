import AlertDispatcher   from '../dispatcher';
import * as AlertActions from '../actions';
import AlertConstants    from '../constants';

import EventEmitter from 'events';

const ActionTypes  = AlertConstants.ActionTypes;
const CHANGE_EVENT = 'change';

let _alerts = [];
let _id     = 0;

class AlertStoreClass extends EventEmitter {
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
      alerts: _alerts.slice()
    };
  }
}

const AlertStore = new AlertStoreClass();

function _addAlert(alert) {
  let _alert = Object.assign({}, alert, { id: _id++ });

  if (!_alert.hasOwnProperty('dismissable')) {
    _alert.dismissable = true;
  }

  if (_alert.autoDismiss) {
    const autodismissTime = _alert.autodismissTime || 10000;

    const dismissFn = (function(alertID) {
      return function() {
        _removeAlert(alertID, true);
      };
    })(_alert.id);

    setTimeout(dismissFn, autodismissTime);
  }

  _alerts.unshift(_alert);

  if (_alert.onAdd) {
    _alert.onAdd(_alert.id);
  }
}

function _removeAlert(id, emitChange) {
  const index = _alerts.map(alert => alert.id).indexOf(id);

  if (index !== -1 && _alerts[index]) {
    const dismissEvent = _alerts[index].onDismiss;

    _alerts.splice(index, 1);

    if (dismissEvent) {
      dismissEvent();
    }

    if (emitChange) {
      AlertStore.emitChange();
    }
  }
}

AlertStore.dispatchToken = AlertDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.type) {
    case ActionTypes.ADD_ALERT:
      _addAlert(action.body);
      break;

    case ActionTypes.REMOVE_ALERT:
      _removeAlert(action.body);
      break;

    default:
      return true;
  }

  AlertStore.emitChange();
  return true;
});

export default AlertStore;
