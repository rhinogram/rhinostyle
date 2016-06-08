import React    from 'react';
import GSAP     from 'react-gsap-enhancer';
import TweenMax from 'gsap';

import NotificationConstants from '../constants';

import { Toast } from '../../components';

const AUTO_DISMISS_TIME  = NotificationConstants.autodismissTime;
const notifyBottomMargin = 6;
const _target            = {};

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
    /* eslint no-undef:0 */
    ease:       Expo.easeOut,
    onComplete: () => {
      _hideNotification(target);
    },
  });
}

function _hideNotification({ target }, delay = true) {
  return TweenMax.to(target, 0.5, {
    marginTop: -target[0].offsetHeight - notifyBottomMargin,
    opacity:   0,
    delay:     delay ? AUTO_DISMISS_TIME : 0,
  });
}

class NotificationContainer extends React.Component {
  static propTyes = {
    onDismiss:    React.PropTypes.func,
    notification: React.PropTypes.object,
  }

  componentDidMount() {
    this.addAnimation(_initNotification);
    this.addAnimation(_showNotification);
  }

  hideNotification = (event) => {
    _target.node = event.target.parentNode.parentNode;
    _target.onDismiss = this.props.onDismiss;

    this.addAnimation(_hideNotification);
  }

  render() {
    const { body, id, type } = this.props.notification;

    return (
      <Toast type={type} body={body} onDismiss={this.hideNotification} />
    );
  }
}

export default GSAP()(NotificationContainer);
