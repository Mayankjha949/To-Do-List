const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let editMode = null; // Track the task being edited

// Add Task Event
addTaskBtn.addEventListener('click', () => {
  if (editMode) {
    // Update Task if Edit Mode is Active
    updateTask();
  } else {
    // Add New Task
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Create New Task Element
  const li = document.createElement('li');
  li.classList.add('task-item');

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="edit-btn" onclick="editTask(this)">Edit</button>
    <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    <button class="complete-btn" onclick="toggleComplete(this)">Mark as Done</button>
  `;

  taskList.appendChild(li);
  taskInput.value = ''; // Clear input field
}

function removeTask(element) {
  element.parentElement.remove();
}

function toggleComplete(element) {
  const taskItem = element.parentElement;
  taskItem.classList.toggle('completed');
}

function editTask(element) {
  const taskItem = element.parentElement;
  const taskText = taskItem.querySelector('.task-text').innerText;
  
  // Set the input field with the task to be edited
  taskInput.value = taskText;
  editMode = taskItem; // Set editMode to the current task item
}

function updateTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Update the text of the task in edit mode
  const taskItem = editMode;
  taskItem.querySelector('.task-text').innerText = taskText;
  taskInput.value = ''; // Clear the input field
  editMode = null; // Reset edit mode
}
