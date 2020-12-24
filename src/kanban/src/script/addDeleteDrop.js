import {deleteBox} from './task.js';

export function addDeleteDrop(e) {
  e.stopPropagation();

  const deleteDrop = document.createElement('div');
  deleteDrop.className = 'delete-drop';
  this.parentNode.appendChild(deleteDrop);

  const list = document.createElement('ul');
  list.className = 'delete-drop-list';
  deleteDrop.appendChild(list);

  const item = document.createElement('li');
  item.className = 'delete-drop-item';
  item.innerText = 'Delete';
  item.addEventListener('click', deleteBox(this.id) );
  list.appendChild(item);

  document.addEventListener('click', removeDeleteDrop);
}

export function removeDeleteDrop(e) {
  e.stopPropagation();
  document.removeEventListener('click', removeDeleteDrop);

  const deleteDrop = document.querySelector('.delete-drop');
  deleteDrop.remove();
}
