import { Dispatcher } from 'flux';

import AlertConstants from '../constants';

const PayloadSources = AlertConstants.PayloadSources;

class DispatcherClass extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action,
    });
  }
}

const AlertDispatcher = new DispatcherClass();

export default AlertDispatcher;
