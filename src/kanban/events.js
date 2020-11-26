const LS_NAME_TASKS = 'tasks';
const initialData = [
  {
    title: 'Backlog',
    tasks: [
      {
        id: 'task0',
        name: 'Login page - performance issues'
      },
      {
        id: 'task1',
        name: 'Sprint bugfix'
      }
    ],
  },
  {
    title: 'Ready',
    tasks: [
      {
        id: 'task2',
        name: 'Shop page - performance issues'
      },
      {
        id: 'task3',
        name: 'Checkout bugfix'
      },
      {
        id: 'task4',
        name: 'Shop bug 1'
      },
      {
        id: 'task5',
        name: 'Shop bug 2'
      },
      {
        id: 'task6',
        name: 'Shop bug 3'
      },
      {
        id: 'task7',
        name: 'Shop bug 4'
      },
      {
        id: 'task8',
        name: 'Shop bug 5'
      },
      {
        id: 'task9',
        name: 'Shop bug 6'
      }
    ],
  },
  {
    title: 'in progress',
    tasks: [
      {
        id: 'task10',
        name: 'User page - performance issues'
      },
      {
        id: 'task11',
        name: 'Auth bugfix'
      }
    ],
  },
  {
    title: 'Finished',
    tasks: [
      {
        id: 'task12',
        name: 'Main page - performance issues'
      },
      {
        id: 'task13',
        name: 'Main page bugfix'
      }
    ],
  },
]

localStorage.setItem('LS_NAME_TASKS', JSON.stringify(initialData));
localStorage.setItem('id-count', '14');

const items = JSON.parse(localStorage.getItem('LS_NAME_TASKS'));
let idCount = +localStorage.getItem('id-count');

const blocks = {
  backlog: document.querySelector('.backlog-tasks'),
  ready: document.querySelector('.ready-tasks'),
  inProgress: document.querySelector('.inProgress-tasks'),
  finished: document.querySelector('.finished-tasks'),
};

const addButtons = {
  backlog: document.querySelector('.backlog-add'),
  ready: document.querySelector('.ready-add'),
  inProgress: document.querySelector('.inProgress-add'),
  finished: document.querySelector('.finished-add'),
};

const selectButtons = {
  ready: document.querySelector('.ready-select'),
  inProgress: document.querySelector('.inProgress-select'),
  finished: document.querySelector('.finished-select'),
};

const listButton = {
  ready: document.querySelector('.ready-list'),
  inProgress: document.querySelector('.inProgress-list'),
  finished: document.querySelector('.finished-list'),
};

const blockItems = {
  backlog: items[0].tasks,
  ready: items[1].tasks,
  inProgress: items[2].tasks,
  finished: items[3].tasks,
};

const taskBlocksOrder = ['backlog', 'ready', 'inProgress', 'finished'];
const taskInput = document.querySelector('.task-input');

const renderTasks = () => {
  localStorage.setItem('id-count', `${idCount}`);
  localStorage.setItem('kanban', JSON.stringify(items));

  Object.keys(blockItems).forEach(key => {
    blocks[key].innerHTML = '';
    blockItems[key].forEach(item => {
      const taskItem = document.createElement('li');

      taskItem.innerText = item.name;
      taskItem.id = item.id;
      blocks[key].appendChild(taskItem);
    });
  });

  taskBlocksOrder.forEach((key, i) => {
    const nextKey = taskBlocksOrder[i + 1];

    if (!nextKey) {
      return;
    }

    if (blockItems[key].length) {
      addButtons[nextKey].disabled = false;
      addButtons[nextKey].style.opacity = '1';
    } else {
      addButtons[nextKey].disabled = true;
      addButtons[nextKey].style.opacity = '0.1';
    }
  });
}

taskBlocksOrder.forEach(key => {
  if (key === 'backlog') {
    addButtons[key].addEventListener('click', () => {
      taskInput.classList.add('visible');

    taskInput.addEventListener('blur', function () {
      if (taskInput.value === '') {
        taskInput.classList.remove('visible');
      } else {
        idCount += 1;
        blockItems[key].push({ id: 'task' + idCount, name: taskInput.value });
        taskInput.value = '';
        taskInput.classList.remove('visible');
        renderTasks();
      }
    });
  });

  return;
  }

  addButtons[key].addEventListener('click', () => {
    addButtons[key].classList.add('invisible');
    selectButtons[key].classList.add('visible');

    const list = document.createElement('ul');

    list.classList.add('select-list');

    const blockOrder = taskBlocksOrder.findIndex(blockKey => key === blockKey);
    const prevBlockName = taskBlocksOrder[blockOrder - 1];

    list.addEventListener('click', ({ target }) => {
      const taskIndex = blockItems[prevBlockName].findIndex(({ id }) => {
        return +id === +target.value;
      });

      blockItems[key] = [...blockItems[key], ...blockItems[prevBlockName].splice(taskIndex, 1)];
      list.remove();
      listButton[key].classList.remove('open');
      selectButtons[key].classList.remove('visible');
      addButtons[key].classList.remove('invisible');
      renderTasks();
    });

    blockItems[prevBlockName].forEach(item => {
      const dropItem = document.createElement('li');

      dropItem.id = item.id;
      dropItem.innerText = item.name;
      dropItem.classList.add('item');
      list.appendChild(dropItem);
    });

    listButton[key].addEventListener('click', () => {
      listButton[key].classList.add('open');
      selectButtons[key].appendChild(list);
    });
  });
});

renderTasks();
