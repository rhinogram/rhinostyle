import CoverContainer     from '../components/CoverContainer';
import React              from 'react';
import ReactDOM           from 'react-dom';
import { TweenMax, Expo } from 'gsap';

const coverContainer  = document.createElement('div');

/* do not render to body > https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.jouodrjb5 */
export function addCover(cover) {
  document.body.insertBefore(coverContainer, document.body.childNodes[0]);
  ReactDOM.render(<CoverContainer>{cover}</CoverContainer>, coverContainer);
}

export function refreshCover(cover) {
  ReactDOM.render(<CoverContainer>{cover}</CoverContainer>, coverContainer);
}

export function removeCover() {
  TweenMax.to('.cover', 0.35, {
    scale: 0.9,
    opacity: 0,
    ease: Expo.easeInOut,
    onComplete: () => {
      ReactDOM.unmountComponentAtNode(coverContainer);
      document.body.removeChild(coverContainer);
    },
  });
}
