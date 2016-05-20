import { Dispatcher } from 'flux';

import NotificationConstants from '../constants';

const PayloadSources = NotificationConstants.PayloadSources;

class DispatcherClass extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      action: action,
      source: PayloadSources.VIEW_ACTION
    });
  }
}

const NotificationDispatcher = new DispatcherClass();

export default NotificationDispatcher;
