import ModalContainer     from '../components/ModalContainer';
import React              from 'react';
import ReactDOM           from 'react-dom';
import { TweenMax, Expo } from 'gsap';

const modalContainer  = document.createElement('div');

/* do not render to body > https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.jouodrjb5 */
export function addModal(modal) {
  document.body.insertBefore(modalContainer, document.body.childNodes[0]);
  document.body.classList.add('modal-open');
  ReactDOM.render(<ModalContainer>{modal}</ModalContainer>, modalContainer);
}

export function refreshModal(modal) {
  ReactDOM.render(<ModalContainer>{modal}</ModalContainer>, modalContainer);
}

export function removeModal() {
  document.body.classList.remove('modal-open');

  TweenMax.to('.modal-backdrop', 0.35, {
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.to('#rhino-modal', 0.35, {
    scale: 0.9,
    opacity: 0,
    ease: Expo.easeInOut,
    onComplete: () => {
      ReactDOM.unmountComponentAtNode(modalContainer);
      document.body.removeChild(modalContainer);
    },
  });
}
