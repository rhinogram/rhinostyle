import React from 'react';

import { Toast } from '../../components';

import * as AlertActions from '../actions';
import AlertStore   from '../stores';

const AlertsContainer =  React.createClass({
  displayName: 'Alerts Container',

  getInitialState() {
    return AlertStore.getState();
  },

  componentDidMount() {
    AlertStore.listen(this.onChange);
  },

  componentWillUnmount() {
    AlertStore.unlisten(this.onChange);
  },

  onChange() {
    this.setState(AlertStore.getState());
  },

  onDismiss(id) {
    AlertActions.removeAlert(id);
  },

  render() {
    const alerts = this.state.alerts.map((alert, index) => {
      return <Toast key={alert.id} index={index} type={alert.type} body={alert.body} dismissable={alert.dismissable} onDismiss={alert.dismissable ? this.onDismiss.bind(this, alert.id) : null} />;
    });

    return (
      <div className="alert-container">
        {alerts}
      </div>
    );
  }
});

export default AlertsContainer;
