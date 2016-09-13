import ModalContainer from '../components/ModalContainer';
import React          from 'react';
import ReactDOM       from 'react-dom';
import TweenMax       from 'gsap';

const body            = document.getElementsByTagName('body')[0];
const modalContainer  = document.createElement('div');

/* do not render to body > https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.jouodrjb5 */
export function addModal(modal) {
  document.body.insertBefore(modalContainer, document.body.childNodes[0]);
  body.classList.add('modal-open');
  ReactDOM.render(<ModalContainer {...modal} />, modalContainer);
}

export function removeModal() {
  body.classList.remove('modal-open');

  TweenMax.to('.modal-backdrop', 0.35, {
    opacity: 0,
    /* eslint no-undef:0 */
    ease: Expo.easeInOut,
  });

  TweenMax.to('#rhino-modal', 0.35, {
    scale: 0.9,
    opacity: 0,
    /* eslint no-undef:0 */
    ease: Expo.easeInOut,
    onComplete: () => {
      ReactDOM.unmountComponentAtNode(modalContainer);
      body.removeChild(modalContainer);
    },
  });
}
