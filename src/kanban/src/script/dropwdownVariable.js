export let main = document.querySelector('.main');
export let cirlceIcon = document.querySelector('.avatar-menu');

export let dropDiv = document.createElement('div');
dropDiv.classList.add('drop-div');

export let firstLine = document.createElement('button');
firstLine.classList.add('line');
dropDiv.appendChild(firstLine);
firstLine.innerHTML = 'My account';

export let secondLine = document.createElement('button');
secondLine.classList.add('line');
dropDiv.appendChild(secondLine);
secondLine.innerHTML = 'My tasks';

export let thirdLine = document.createElement('button');
thirdLine.classList.add('line');
dropDiv.appendChild(thirdLine);
thirdLine.innerHTML = 'Log out';
