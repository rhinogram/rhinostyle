import React from 'react';
import ReactDOM from 'react-dom';

const $coverContainer  = document.createElement('div');
$coverContainer.setAttribute('data-js', 'coverContainer');

/* do not render to body > https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.jouodrjb5 */
export function addCover(cover) {
  document.body.insertBefore($coverContainer, document.body.childNodes[0]);
  ReactDOM.render(<div>{ cover }</div>, $coverContainer); // eslint-disable-line react/jsx-filename-extension

  $coverContainer.querySelector('.cover').timeline.play();
}

export function refreshCover(cover) {
  ReactDOM.render(<div>{ cover }</div>, $coverContainer);
}

export function removeCover() {
  $coverContainer.querySelector('.cover').timeline.reverse();
}
