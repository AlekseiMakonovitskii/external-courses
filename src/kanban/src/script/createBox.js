import {content} from './DomVariable.js';

export function createBox(id, title) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.id = id;
  content.appendChild(box);

  const header = document.createElement('div');
  header.classList.add('box-header');
  header.innerHTML = `
    <span>${title}</span>
    <img src="../image/header-dots.svg" id ="${id}" class="header-dots" alt="header-dots" />
  `;
  box.appendChild(header);

  const container = document.createElement('div');
  container.classList.add('box-container');
  box.appendChild(container);

  const list = document.createElement('div');
  list.classList.add('box-list');
  container.appendChild(list);

  const button = document.createElement('button');
  button.classList.add('box-button');
  button.innerHTML = '<span>┿</span>Add card';
  container.appendChild(button);
}

export function createBoxItem(list, data) {
  data.map(box => {
    const item = document.createElement('div');
    item.classList.add('box-item');
    item.id = box.id;
    item.innerText = box.name;
    list.appendChild(item);
  });
}
