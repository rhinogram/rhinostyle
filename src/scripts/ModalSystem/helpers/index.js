import React from 'react';
import ReactDOM from 'react-dom';

const $modalContainer  = document.createElement('div');
$modalContainer.setAttribute('data-js', 'modalContainer');

/* do not render to body > https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.jouodrjb5 */
export function addModal(modal) {
  document.body.insertBefore($modalContainer, document.body.childNodes[0]);
  ReactDOM.render(<div>{modal}</div>, $modalContainer); // eslint-disable-line react/jsx-filename-extension

  $modalContainer.querySelector('.modal').timeline.play();
}

export function refreshModal(modal) {
  ReactDOM.render(<div>{modal}</div>, $modalContainer);
}

export function removeModal() {
  $modalContainer.querySelector('.modal').timeline.reverse();
}
