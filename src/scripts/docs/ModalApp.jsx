import React    from 'react';
import ReactDOM from 'react-dom';

import { Modal, ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter } from '../components';


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
                  <h4 className="modal__header__title">Modal title</h4>
                  {/*do we need an entire component dedicated to modal-header-title? or is an h4 with className enough?*/}
                </ModalHeader>
                <ModalBody>
                  <div className="form">
                    <div className="form__group">
                      <label>First Name</label>
                      <input className="form__control" type="text" />
                    </div>
                    <div>
                      <label>Last Name</label>
                      <input className="form__control" type="text" />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button type="button" className="btn btn--default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn--secondary">Save Changes</button>
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
