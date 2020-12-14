import {main, cirlceIcon, dropDiv} from './dropwdownVariable.js';

let count = true;

function openDrop() {
  main.appendChild(dropDiv);
}

function removeDrop() {
  let removing = document.querySelector('.drop-div')
  removing.remove();
}

function useAll() {
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

export function dropdpwn() {
  cirlceIcon.addEventListener('click', useAll);
}
