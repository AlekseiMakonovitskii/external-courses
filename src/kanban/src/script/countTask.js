import {initialData} from './task.js';

export function countTask() {
  const tasksCounter = document.querySelector('.tasks-counter');
  if (initialData.length) {
    const activeTasks = initialData[0].tasks.length;
    const finishedTasks = initialData[initialData.length - 1].tasks.length;
    tasksCounter.innerHTML = `
      <li class="tasks-counter-item">Active tasks: ${activeTasks}</li>
      <li class="tasks-counter-item">Finished tasks: ${finishedTasks}</li>
    `;
  } else {
    tasksCounter.innerHTML = '';
  }
}
