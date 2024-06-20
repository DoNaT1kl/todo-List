const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const MAX_ITEMS = 12;

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskText = taskInput.value.trim();

  if (taskList.getElementsByTagName('li').length < MAX_ITEMS) {
    if (taskText.length > 0 && taskText.length <= 50) {
      const taskElement = document.createElement('li');
      taskElement.textContent = taskText;
      
      taskElement.addEventListener('click', function() {
        taskElement.classList.toggle('completed');
      });
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить';
      
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskElement);
      });
      
      taskElement.appendChild(deleteButton);
      taskList.appendChild(taskElement);
      taskInput.value = '';
    }
  } else {
    alert('Превышено максимальное количество элементов в списке');
  }
});