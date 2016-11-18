import React              from 'react';
import ReactDOM           from 'react-dom';
import { TweenMax, Expo } from 'gsap';

const coverContainer  = document.createElement('div');

/* do not render to body > https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.jouodrjb5 */
export function addCover(cover) {
  document.body.insertBefore(coverContainer, document.body.childNodes[0]);
  document.body.classList.add('cover-open');
  ReactDOM.render(<div>{cover}</div>, coverContainer);
}

export function refreshCover(cover) {
  ReactDOM.render(<div>{cover}</div>, coverContainer);
}

export function removeCover() {
  document.body.classList.remove('cover-open');
  TweenMax.to('.cover', 0.35, {
    opacity: 0,
    ease: Expo.easeOut,
    scale: 0.95,
    onComplete: () => {
      ReactDOM.unmountComponentAtNode(coverContainer);
      document.body.removeChild(coverContainer);
    },
  });
}
