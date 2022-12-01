document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskDescription = document.getElementById("new-task-description");
// parent node
const theList = document.getElementById("tasks");

const createNewTask = event => { 
  event.preventDefault(); 
  // create a list element (li) and assign it to a variable
  const newTask = document.createElement('li');

  newTask.innerText = newTaskDescription.value;
  createButton(newTask);
  theList.appendChild(newTask);

  event.target.reset();
};

const createButton = task => {
   const btn = document.createElement('button');
    btn.innerText = "X";

    task.appendChild(btn);
    btn.addEventListener('click',  (e) => deleteTask(e));
}

const deleteTask = (e) => {
  const selectedTask = e.target.parentElement;
  theList.removeChild(selectedTask);
}

document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))
});
