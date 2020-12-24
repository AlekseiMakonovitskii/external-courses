import {content, dropDiv} from './DomVariable.js';

let count = true;

function openDrop() {
  content.appendChild(dropDiv);
}

function removeDrop() {
  let removing = document.querySelector('.drop-div')
  removing.remove();
}

export function useAll() {
  let arrow = document.querySelector('.arrow');
  
  if (count === true) {
    openDrop();
    count = false;
    arrow.style.transform = 'rotate(180deg)'
  } else {
    removeDrop();
    count = true;
    arrow.style.transform = 'rotate(0deg)'
  }
}
