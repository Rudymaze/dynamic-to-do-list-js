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
    }
    // create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    removeButton = document.createElement("button");
    removeButton.className = "remove-btn";
    removeButton.textContent = "Remove";

    removeButton.onclick = () => {
      // remove the task from the list
      taskItem.remove();
    };

    // update the counter
    taskItem.appendChild(removeButton);

    const taskList = document.getElementById("task-list");
    taskList.appendChild(taskItem);

    taskItem.classList.add("task-item");
    taskList.appendChild(taskItem);

    // clear the input field after adding a task
    document.getElementById("task-Input").value = "";

    // add a new task when the add button is clicked
    const addButton = document.getElementById("add-task-btn");
    addButton.addEventListener("click", addTask);

    // add the event listener to the add button
    const taskInput = document.getElementById("task-input");
    taskInput.addEventListener("keypress", function (event) {
      // if the user presses Enter, add a new task
      if (event.key === "Enter") {
        addTask();
      }
    });
  }
  // add a new task when the add button is clicked
  document.addEventListener("DOMContentLoaded", addTask());
});
