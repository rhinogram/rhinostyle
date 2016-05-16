import React    from 'react';
import ReactDOM from 'react-dom';

import AlertsContainer from './components/AlertsContainer';

import * as AlertActions from './actions';

document.addEventListener('DOMContentLoaded', (event) => {
  const alertsContainer = document.getElementById('js-alerts-container');

  if (alertsContainer) {
    ReactDOM.render(<AlertsContainer />, alertsContainer);
  }
}, false);

export { AlertActions };
