import React from 'react';

import NotificationContainer from './NotificationContainer';

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
      return <NotificationContainer key={notification.id} index={index} notification={notification} onDismiss={this.onDismiss.bind(this, notification.id)} />;
    });

    return (
      <div>
        {notifications}
      </div>
    );
  }
});

export default NotificationsContainer;
