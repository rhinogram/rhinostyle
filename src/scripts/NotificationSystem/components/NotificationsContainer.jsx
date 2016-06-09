import React from 'react';

import NotificationContainer from './NotificationContainer';

import * as NotificationActions from '../actions';
import NotificationStore        from '../stores';

const _state = NotificationStore.getState();

class NotificationsContainer extends React.Component {
  state = _state;

  componentDidMount() {
    NotificationStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    NotificationStore.unlisten(this.onChange.bind(this));
  }

  onChange() {
    this.setState(NotificationStore.getState());
  }

  onDismiss(id) {
    NotificationActions.removeNotification(id);
  }

  render() {
    const notifications = this.state.notifications.map((notification, index) =>
      /* eslint react/jsx-no-bind:0 */
      <NotificationContainer key={notification.id} index={index} notification={notification} onDismiss={this.onDismiss.bind(this, notification.id)} />
    );

    return (
      <div>
        {notifications}
      </div>
    );
  }
}

export default NotificationsContainer;
