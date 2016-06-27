import React    from 'react';
import ReactDOM from 'react-dom';

import { NotificationActions, Button, Icon, Input, Modal, ModalContainer, ModalContent, ModalHeader, ModalHeaderTitle, ModalBody, ModalFooter } from '../components';

class ModalApp extends React.Component {
  onClick = (event) => {
    event.preventDefault();

    NotificationActions.addNotification({
      body: <Modal>
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal__header__title">Modal title</h4>
            </ModalHeader>
            <ModalBody>
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
              <Button type="default">Close</Button>
              <Button type="secondary">Save Changes</Button>
            </ModalFooter>
          </ModalContent>
        </ModalContainer>
      </Modal>,
      onDismiss() {
        /* eslint no-console:0 */
        console.log('I run when the notification was dismissed');
      },
    });
  }

  render() {
    return (
      <div>

        <h1 className="site-headline">Modals</h1>
        <section className="site-section">
          <h3 className="site-subheadline">Modal Example</h3>
          <p className="site-copy">To see a modal in action, <a href="#" onClick={this.onClick}>click here</a>.</p>

          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalHeaderTitle icon="calendar">
                  This is a modal title
                </ModalHeaderTitle>
              </ModalHeader>
              <ModalBody>
                <div className="form">
                  <div className="form__group">
                    {/*form group is used on the first input but not the second
                      Is this intuitive enough? form__group should implement equal
                      margins on top and bottom? Consider how often forms
                      are used in modals..*/}
                    <Input label="First Name" />
                    {/*Will there be a circumstance that a label=firstname is
                      not enough? We could potentially deal with icon/image labels
                      at some point*/}
                  </div>
                  <div>
                    <Input label="Last Name" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="default">Close</Button>
                <Button type="secondary">Save Changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Modal Sizes</h3>
          <p>Add the <code>modal__container--sm</code> modifier to <code>modal__container</code> for a smaller modal.</p>
          <p>Add the <code>modal__container--lg</code> modifier to <code>modal__container</code> for a larger modal.</p>
        </section>

      </div>
    );
  }
}

ReactDOM.render(<ModalApp />, document.getElementById('js-app'));
