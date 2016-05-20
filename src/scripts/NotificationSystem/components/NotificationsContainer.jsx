import React from 'react';

import { Toast } from '../../components';

import * as NotificationActions from '../actions';
import NotificationStore        from '../stores';

const NotificationsContainer =  React.createClass({
  displayName: 'Notifications Container',

  getInitialState() {
    return NotificationStore.getState();
  },

  componentDidMount() {
    NotificationStore.listen(this.onChange);
  },

  componentWillUnmount() {
    NotificationStore.unlisten(this.onChange);
  },

  onChange() {
    this.setState(NotificationStore.getState());
  },

  onDismiss(id) {
    NotificationActions.removeNotification(id);
  },

  render() {
    const notifications = this.state.notifications.map((notification, index) => {
      return <Toast key={notification.id} index={index} type={notification.type} body={notification.body} dismissable={notification.dismissable} onDismiss={notification.dismissable ? this.onDismiss.bind(this, notification.id) : null} />;
    });

    return (
      <div className="notification-container">
        {notifications}
      </div>
    );
  }
});

export default NotificationsContainer;
