export const content = document.querySelector('.content');
export const profile = document.querySelector('.profile');
export const createNewList = document.querySelector('.create-new-list');

export let dropDiv = document.createElement('div');
dropDiv.classList.add('drop-div');

export let firstLine = document.createElement('button');
firstLine.classList.add('line');
dropDiv.appendChild(firstLine);
firstLine.innerText = 'My account';

export let secondLine = document.createElement('button');
secondLine.classList.add('line');
dropDiv.appendChild(secondLine);
secondLine.innerText = 'My tasks';

export let thirdLine = document.createElement('button');
thirdLine.classList.add('line');
dropDiv.appendChild(thirdLine);
thirdLine.innerText = 'Log out';
