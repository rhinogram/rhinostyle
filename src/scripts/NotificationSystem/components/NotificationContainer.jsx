import { TweenMax, Expo } from 'gsap';
import PropTypes from 'prop-types';
import React from 'react';
import GSAP from 'react-gsap-enhancer';

import { Toast } from '../../components';
import * as NotificationActions from '../actions';
import NotificationConstants    from '../constants';

const AUTO_DISMISS_TIME  = NotificationConstants.autodismissTime;
const notifyBottomMargin = 6;

function _initNotification({ target }) {
  return TweenMax.set(target, {
    marginTop:    -target[0].offsetHeight,
    marginBottom: notifyBottomMargin,
    opacity:      0.25,
  });
}

function _showNotification({ target }) {
  return TweenMax.to(target, 0.5, {
    marginTop:  0,
    opacity:    1,
    ease:       Expo.easeOut,
  });
}

function _hideNotification({ target }) {
  return TweenMax.to(target, 0.5, {
    marginTop: -target[0].offsetHeight - notifyBottomMargin,
    opacity:   0,
  });
}

class NotificationContainer extends React.Component {
  static propTypes = {
    onDismiss: PropTypes.func,
    notification: PropTypes.object,
  };

  componentDidMount() {
    this.addAnimation(_initNotification);
    this.addAnimation(_showNotification);

    this.timeoutId = setTimeout(() => {
      this.hideNotification();
    }, AUTO_DISMISS_TIME);
  }

  hideNotification = () => {
    this.addAnimation(_hideNotification);

    clearTimeout(this.timeoutId);
    setTimeout(() => {
      NotificationActions.removeNotification(this.props.notification.id);
    }, 500);
  };

  render() {
    const { body, icon, type } = this.props.notification;

    return (
      <Toast type={type} icon={icon} body={body} onDismiss={this.hideNotification} />
    );
  }
}

/* eslint new-cap:0 */
export default GSAP()(NotificationContainer);
