import React    from 'react';
import GSAP     from 'react-gsap-enhancer';
import TweenMax from 'gsap';

import { Toast } from '../../components';

const notifyBottomMargin = 6;
const notifyDelay        = 6;

class NotificationContainer extends React.Component {
  static displayName = 'Notification Container'

  static propTyes = {
    onDismiss:    React.PropTypes.func,
    notification: React.PropTypes.object
  }

  componentDidMount() {
    this.addAnimation(this.initNotification);
    this.addAnimation(this.showNotification);
  }

  render() {
    const { body, id, type } = this.props.notification;

    return (
      <Toast type={type} body={body} onDismiss={ () => {} } />
    );
  }

  initNotification({target}) {
    return TweenMax.set(target, {
      marginBottom: notifyBottomMargin,
      marginTop: -target[0].offsetHeight,
      opacity: 0.25
    });
  }

  showNotification({target}) {
    return TweenMax.to(target, 0.5, {
      marginTop: 0,
      opacity: 1,
      ease: Expo.easeOut
    });
  }

  hideNotification({target}, delay=true) {
    return TweenMax.to(target, 0.5, {
      opacity: 0,
      marginTop: -target[0].offsetHeight - notifyBottomMargin,
      delay: delay ? notifyDelay : 0,
      onComplete: () => {
        target.parentNode.removeChild(target);
      }
    });
  }
}

export default GSAP()(NotificationContainer);
