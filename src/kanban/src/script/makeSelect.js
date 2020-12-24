import {initialData} from './task.js';
import {createBoxItem} from './createBox.js';
import {checkBoxFunc} from './task.js';

export function makeSelect(index) {
  function removeSelect() {
    this.removeEventListener('blur', removeSelect);

    if (this.selectedIndex) {
      moveTask(+this[this.selectedIndex].id);
    }

    this.parentNode.remove();
  }

  function moveTask(id) {
    const task = initialData[index - 1].tasks.find(x => x.id === id);

    initialData[index - 1].tasks = initialData[index - 1].tasks.filter(x => x.id !== id);
    initialData[index].tasks = [...initialData[index].tasks, task];

    localStorage.setItem('data', JSON.stringify(initialData));

    const list = document.querySelectorAll('.box-list');
    for (let i = 0; i < list.length; i++) {
      if(i === index - 1 || i === index) {
        list[i].innerHTML = '';
        createBoxItem(list[i], initialData[i].tasks);
      }
    }
    checkBoxFunc();
  }

  return function addSelect() {
    const selectButton = document.createElement('div');
    selectButton.classList.add('select-button');
    this.previousSibling.appendChild(selectButton);

    const select = document.createElement('select');
    select.classList.add('select');
    selectButton.appendChild(select);

    const option = document.createElement('option');
    select.appendChild(option);

    initialData[index - 1].tasks.map(task => {
      const option = document.createElement('option');
      option.id = task.id;
      option.value = task.name;
      option.textContent = task.name;
      select.appendChild(option);
    });

    select.addEventListener('blur', removeSelect);
    select.focus();
  }
}
