document.addEventListener("DOMContentLoaded", () => {
  addButton = document.getElementById("add-task-btn");
  taskInput = document.getElementById("task-input");
  taskList = document.getElementById("task-list");

  function addTask(task) {
    taskInput = document.getElementById("task-input");
    teskText = taskInput.value.trim();
    if (taskText == "") {
      prompt("enter a task");
    }
    // const taskText.textContent = document.createElement("li");
  }
  addButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    addTask(task);
  });
});
