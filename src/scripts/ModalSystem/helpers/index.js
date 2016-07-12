import ModalContainer from '../components/ModalContainer';
import React          from 'react';
import ReactDOM       from 'react-dom';

const body            = document.getElementsByTagName('body')[0];
const modalContainer  = document.createElement('div');

/* do not render to body > https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.jouodrjb5 */
export function addModal(modal) {
  document.body.insertBefore(modalContainer, document.body.childNodes[0]);
  body.classList.add('modal-open');
  ReactDOM.render(<ModalContainer modal={modal} />, modalContainer);
}

export function removeModal() {
  body.classList.remove('modal-open');
  ReactDOM.unmountComponentAtNode(modalContainer);
  body.removeChild(modalContainer);
}
