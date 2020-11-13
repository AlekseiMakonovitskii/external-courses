let main = document.querySelector('.main');
let cirlceIcon = document.querySelector('.avatar-menu');
let arrow = document.querySelector('.arrow');
let count = 0;

function openDrop() {
  let dropDiv = document.createElement('div');
  dropDiv.classList.add('drop-div');
  main.appendChild(dropDiv);

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
}

function removeDrop() {
  let removing = document.querySelector('.drop-div')
  removing.remove();
}

function useAll() {
  if (count === 0) {
    openDrop();
    count = 1;
    arrow.style.transform = 'rotate(180deg)'
  } else {
    removeDrop();
    count = 0;
    arrow.style.transform = 'rotate(0deg)'
  }
}

cirlceIcon.addEventListener('click', useAll);
