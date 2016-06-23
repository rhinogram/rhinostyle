import React    from 'react';
import ReactDOM from 'react-dom';

import { Button, Input, Modal, ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter } from '../components';

class ModalApp extends React.Component {

  render() {
    return (
      <div>

        <h1 className="site-headline">Modals</h1>
        <section className="site-section">
          <h3 className="site-subheadline">Modal Example</h3>
          <Modal>
            <ModalContainer>
              <ModalContent>
                <ModalHeader>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  {/*how are we going to handle X buttons?
                    It feels like this could be a button type*/}
                  <h4 className="modal__header__title">Modal title</h4>
                  {/*do we need an entire component dedicated to modal-header-title?
                    or is an h4 with className enough?*/}
                </ModalHeader>
                <ModalBody>
                  <div className="form">
                    {/*I cannot seem to find a component replacement for forms -
                      what is className form doing that its child form__group could
                      not handle? Maybe I am over-react-ing??*/}
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
            </ModalContainer>
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
