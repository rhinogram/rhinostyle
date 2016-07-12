import React    from 'react';
import ReactDOM from 'react-dom';

import NotificationsContainer from './components/NotificationsContainer';

import * as NotificationActions from './actions';

document.addEventListener('DOMContentLoaded', () => {
  const notificationsContainer = document.getElementById('js-toasts-container');

  if (notificationsContainer) {
    ReactDOM.render(<NotificationsContainer />, notificationsContainer);
  }
}, false);

export { NotificationActions };
