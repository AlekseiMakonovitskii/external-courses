import {createBox} from './createBox.js';
import {createBoxItem} from './createBox.js';
import {countTask} from './countTask.js';
import {disableButton} from './disableButton.js';
import {addInput} from './addInput.js';
import {makeSelect} from './makeSelect.js';
import {addDeleteDrop} from './addDeleteDrop.js';
import {content} from './DomVariable.js';

export const localStorageData = JSON.parse(localStorage.getItem('data'));
export let initialData = localStorageData ? localStorageData : [];

export function checkBoxFunc() {
  disableButton();
  countTask();
}

export function addTask(text) {
  if (text.trim()) {
    const task = {
      id: Math.random(),
      name: text
    };

    initialData[0].tasks = [...initialData[0].tasks, task];

    localStorage.setItem('data', JSON.stringify(initialData));

    const list = document.querySelector('.box-list');
    list.innerHTML = '';
    createBoxItem(list, initialData[0].tasks);

    checkBoxFunc();
  }
}

export function addBox(text) {
  if (text.trim()) {
    const box = {
      id: Math.random(),
      title: text,
      tasks: []
    };

    initialData = [box, ...initialData];

    localStorage.setItem('data', JSON.stringify(initialData));

    content.innerHTML = '';
    makeBoard(initialData);
  }
}

export function deleteBox(id) {
  return function (e) {
    e.stopPropagation();
    document.removeEventListener('click', addDeleteDrop);

    initialData = initialData.filter(box => box.id !== +id);
    localStorage.setItem('data', JSON.stringify(initialData));

    content.innerHTML = '';
    makeBoard(initialData);
  }
}

export function makeBoard(data) {
  if (data.length) {
    data.map(box => {
      const {
        id,
        title,
        tasks
      } = box;
      createBox(id, title);

      const item = document.getElementById(id);
      const list = item.querySelector('.box-list');
      createBoxItem(list, tasks);
    });

    const buttons = document.querySelectorAll('.box-button');
  
    buttons[0].addEventListener('click', addInput);
    for (let i = 1; i < buttons.length; i++) {
      buttons[i].addEventListener('click', makeSelect(i));    
    }

    const headerDots = document.querySelectorAll('.header-dots');
    for (let i = 0; i < headerDots.length; i++) {
      headerDots[i].addEventListener('click', addDeleteDrop);
    }

    checkBoxFunc();
  } else {
    const box = document.createElement('div');
    box.classList.add('box--empty');
    box.innerText = 'Add your first box';
    content.appendChild(box);
    
    checkBoxFunc();
  }
}
