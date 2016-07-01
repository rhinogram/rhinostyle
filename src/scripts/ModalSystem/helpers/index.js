import ModalContainer from '../components/ModalContainer';
import React          from 'react';
import ReactDOM       from 'react-dom';

const body = document.getElementsByTagName('body')[0];
const modalContainer = document.getElementById('js-modal-container');

export function addModal(modal) {
  body.classList.add('modal-open');
  ReactDOM.render(<ModalContainer modal={modal} />, modalContainer);
  // ReactDOM.render(<ModalContainer size={modal.size} title={modal.title} icon={modal.icon} dismissable={modal.dismissable} body={modal.body} footer={modal.footer} />, modalContainer);
  // prefer to pass in modal as a prop rather than individual pieces
}

export function removeModal() {
  body.classList.remove('modal-open');
  ReactDOM.unmountComponentAtNode(modalContainer);
  // ReactDOM.render(<div></div>, modalContainer);
  // unmounting seems to server same functionality without leaving an empty div on the page
}
