import {addTask} from './task.js';

export function addInput() {
  const selectButton = document.createElement('div');
  selectButton.classList.add('select-button');
  this.previousSibling.appendChild(selectButton);

  const input = document.createElement('input');
  input.classList.add('input');
  selectButton.appendChild(input);

  input.focus();
  input.addEventListener('blur', removeInput);
}

export function removeInput() {
  this.removeEventListener('blur', removeInput);
  addTask(this.value);

  this.parentNode.remove();
}
