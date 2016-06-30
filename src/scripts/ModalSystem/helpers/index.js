import ModalContainer from '../components/ModalContainer';
import React          from 'react';
import ReactDOM       from 'react-dom';

export function addModal(modal) {
  ReactDOM.render(<ModalContainer title={modal.title} icon={modal.icon} dismissable={modal.dismissable} body={modal.body} footer={modal.footer} />, document.getElementById('js-modal-container'));
}
