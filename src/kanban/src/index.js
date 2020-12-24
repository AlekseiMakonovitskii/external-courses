import {useAll} from './script/DropDownLogic.js';
import {createNewList} from './script/DomVariable.js';
import {profile} from './script/DomVariable.js';
import {addNewBoxInput} from './script/addNewBoxInput.js';
import {makeBoard} from './script/task.js';
import {initialData} from './script/task.js';

profile.addEventListener('click', useAll);
createNewList.addEventListener('click', addNewBoxInput);

(function onLoad(data) {
  makeBoard(data)
}(initialData));
