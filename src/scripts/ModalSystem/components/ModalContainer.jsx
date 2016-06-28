import React    from 'react';
import GSAP     from 'react-gsap-enhancer';
import TweenMax from 'gsap';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalHeaderTitle, Button, Input } from '../../components';

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
    onComplete() {
      _target.target = target;

      _hideNotification(_target);
    },
  });
}

function _hideNotification({ target }, delay = true) {
  if (_target.hasOwnProperty('delay')) {
    /* eslint no-param-reassign:0 */
    delay = _target.delay;
  }

  return TweenMax.to(target, 0.5, {
    marginTop: -target[0].offsetHeight - notifyBottomMargin,
    opacity:   0,
    delay:     delay ? AUTO_DISMISS_TIME : 0,
    onComplete() {
      _target.onDismiss();

      delete _target.delay;
    },
  });
}

class ModalContainer extends React.Component {
  static propTypes = {
    onDismiss:    React.PropTypes.func,
    notification: React.PropTypes.object,
  }

  componentDidMount() {
    this.addAnimation(_initNotification);
    this.addAnimation(_showNotification);

    _target.onDismiss = this.props.onDismiss;
  }

  hideNotification = (event) => {
    _target.node = event.target.parentNode.parentNode;
    _target.delay = false;

    this.addAnimation(_hideNotification);
  }

  render() {
    const { body, header, footer, icon, type } = this.props;

    return (
      <Modal size="sm">
        <ModalContent>
          <ModalHeader>
            <ModalHeaderTitle>
              {this.props.header}
              This is a small modal
            </ModalHeaderTitle>
          </ModalHeader>
          <ModalBody>
            {this.props.body}
            <div className="form">
              <div className="form__group">
                <Input label="First Name" />
              </div>
              <div>
                <Input label="Last Name" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            {this.props.footer}
            <Button type="default">Close</Button>
            <Button type="secondary">Save Changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

/* eslint new-cap:0 */
export default GSAP()(ModalContainer);
