import React, { Fragment } from 'react';

import NotificationContainer from './NotificationContainer';
import * as NotificationActions from '../actions';
import NotificationStore from '../stores';

const _state = NotificationStore.getState();

class NotificationsContainer extends React.Component {
  state = _state;

  componentDidMount() {
    NotificationStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NotificationStore.unlisten(this.onChange);
  }

  onChange = () => {
    this.setState(NotificationStore.getState());
  }

  onDismiss = (id) => {
    NotificationActions.removeNotification(id);
  }

  render() {
    const notifications = this.state.notifications.map((notification, index) =>
      <NotificationContainer key={notification.id} index={index} notification={notification} onDismiss={() => this.onDismiss(notification.id)} />);

    return (
      <Fragment>
        {notifications}
      </Fragment>
    );
  }
}

export default NotificationsContainer;
