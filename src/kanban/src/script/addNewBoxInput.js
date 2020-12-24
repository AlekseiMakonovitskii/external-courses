import {content} from './DomVariable.js';
import {addBox} from './task.js';

export function addNewBoxInput() {
  const box = document.createElement('div');
  box.classList.add('box-input');
  content.appendChild(box);

  const selectButton = document.createElement('div');
  selectButton.classList.add('select-button');
  box.appendChild(selectButton);

  const input = document.createElement('input');
  input.classList.add('input');
  selectButton.appendChild(input);

  input.focus();
  input.addEventListener('blur', removeNewBoxInput);
}

export function removeNewBoxInput() {
  this.removeEventListener('blur', removeNewBoxInput);
  addBox(this.value);

  this.parentNode.parentNode.remove();
}
