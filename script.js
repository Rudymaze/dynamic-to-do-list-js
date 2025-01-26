document.addEventListener("DOMContentLoaded", () => {
  addButton = document.getElementById("add-task-btn");
  taskInput = document.getElementById("task-input");
  taskList = document.getElementById("task-list");

  //   creating a new task
  function addTask() {
    taskText = document.getElementById("task-input").value.trim();

    // prevent adding an empty task
    if (taskText === "") {
      alert("enter a task");
      return;
      // return to stop the function execution
    } else {
      // create a new list item for the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      removeButton = document.createElement("button");
      removeButton.classList.add("remove-btn");
      removeButton.textContent = "Remove";

      button.onclick = () => {
        // remove the task from the list
        taskItem.remove();

        // update the counter
        taskItem.appendChild(removeButton);

        const taskList = document.getElementById("task-list");
        taskList.appendChild(taskItem);

        taskItem.classList.add("task-item");
        taskList.appendChild(taskItem);

        // clear the input field after adding a task
        document.getElementById(taskInput).value = "";
      };
    }
  }
  addButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    addTask(task);
  });
});
