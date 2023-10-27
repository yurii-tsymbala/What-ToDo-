import { TaskService, Task } from "./TaskService";

let taskService = new TaskService();
const listDiv = document.getElementById("list");
loadList();

document.getElementById("addBtn").addEventListener("click", function () {
  const input = document.getElementById("taskName");
  taskService.createTask(input.value);
  input.value = "";
  loadList();
});

function loadList() {
  listDiv.innerHTML = "";
  for (const task of taskService.allTasks()) {
    configureCell(task);
  }
}

function configureCell(currentTask) {
  let isEdited = false;
  let cell = document.createElement("div");
  cell.className = "cell divWithBorder";

  let buttonsWrapper = document.createElement("div");
  let editBtn = document.createElement("button");
  let dlteBtn = document.createElement("button");
  let label = document.createElement("label");
  let input = document.createElement("input");

  input.className = "input";
  input.value = currentTask.name;
  input.id = currentTask.id;

  label.className = "label";
  label.textContent = currentTask.name;
  label.id = currentTask.id;

  editBtn.className = "btnEdit";
  editBtn.innerHTML = "Edit";
  editBtn.onclick = function () {
    if (isEdited) {
      editBtn.className = "btnEdit";
      currentTask.name = input.value;
      taskService.updateTask(currentTask);
      console.log("Updated");
      loadList();
    } else {
      let deletedLabel = document.getElementById(currentTask.id);
      deletedLabel.parentNode.removeChild(deletedLabel);
      editBtn.innerHTML = "Save"
      editBtn.className = "btnSave";
      cell.prepend(input);
      isEdited = true;
    }
  };

  dlteBtn.className = "btnDelete";
  dlteBtn.innerHTML = "Delete";
  dlteBtn.onclick = function () {
    taskService.deleteTask(currentTask);
    console.log("Deleted");
    loadList();
  };

  cell.appendChild(label);
  cell.appendChild(buttonsWrapper);

  buttonsWrapper.appendChild(editBtn);
  buttonsWrapper.appendChild(dlteBtn);

  buttonsWrapper.className = "buttonsWrapper";

  listDiv.appendChild(cell);
}
