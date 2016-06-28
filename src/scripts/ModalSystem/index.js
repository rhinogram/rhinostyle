import React    from 'react';
import ReactDOM from 'react-dom';

import ModalContainer from './components/ModalContainer';

import * as ModalActions from '../NotificationSystem/actions';

document.addEventListener('DOMContentLoaded', (event) => {
  const notificationsContainer = document.getElementById('js-toasts-container');

  if (notificationsContainer) {
    ReactDOM.render(<ModalContainer />, notificationsContainer);
  }
}, false);

export { ModalActions };
