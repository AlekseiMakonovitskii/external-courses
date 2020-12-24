import {initialData} from './task.js';

export function disableButton() {
  const buttons = document.querySelectorAll('.box-button');

  for (let i = 1; i < buttons.length; i++) {
    buttons[i].removeAttribute('disabled');

    if (!initialData[i - 1].tasks.length) {
      buttons[i].setAttribute('disabled', 'true');
    }
  }
}
