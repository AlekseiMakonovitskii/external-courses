let main = document.querySelector('.main');
let cirlceIcon = document.querySelector('.avatar-menu');
let arrow = document.querySelector('.arrow');

let dropDiv = document.createElement('div');
dropDiv.classList.add('drop-div');

let firstLine = document.createElement('button');
firstLine.classList.add('line');
dropDiv.appendChild(firstLine);
firstLine.innerHTML = 'My account';

let secondLine = document.createElement('button');
secondLine.classList.add('line');
dropDiv.appendChild(secondLine);
secondLine.innerHTML = 'My tasks';

let thirdLine = document.createElement('button');
thirdLine.classList.add('line');
dropDiv.appendChild(thirdLine);
thirdLine.innerHTML = 'Log out';

let count = true;


function openDrop() {
  main.appendChild(dropDiv);
}

function removeDrop() {
  let removing = document.querySelector('.drop-div')
  removing.remove();
}

function useAll() {
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

cirlceIcon.addEventListener('click', useAll);
