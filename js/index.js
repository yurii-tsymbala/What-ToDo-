import { TaskService, Task } from "./TaskService";

const listDiv = document.getElementById("list");
loadList();

document.getElementById("addBtn").addEventListener("click", async function () {
  const input = document.getElementById("taskName");
  try {
    await TaskService.createTask(input.value);
    await loadList();
  } catch (error) {
    console.log(error);
  }
  input.value = "";
});

async function loadList() {
  listDiv.innerHTML = "";
  try {
    const tasks = await TaskService.allTasks();
    for (const task of tasks) {
      configureCell(task);
    }
  } catch (error) {
    console.log(error);
  }
}

function configureCell(currentTask) {
  let isEdited = false;

  let cell = document.createElement("div");
  let buttonsWrapper = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("input");
  let editBtn = document.createElement("button");
  let dlteBtn = document.createElement("button");

  cell.className = "cell divWithBorder";
  
  buttonsWrapper.className = "buttonsWrapper";

  input.className = "input";
  input.value = currentTask.name;
  input.id = currentTask.id;

  label.className = "label";
  label.textContent = currentTask.name;
  label.id = currentTask.id;

  editBtn.className = "btnEdit";
  editBtn.innerHTML = "Edit";
  editBtn.onclick = async function () {
    if (isEdited) {
      editBtn.className = "btnEdit";
      currentTask.name = input.value;
      try {
        await TaskService.updateTask(currentTask);
        await loadList();
      } catch (error) {
        console.log(error);
      }
    } else {
      let deletedLabel = document.getElementById(currentTask.id);
      deletedLabel.parentNode.removeChild(deletedLabel);
      editBtn.innerHTML = "Save";
      editBtn.className = "btnSave";
      cell.prepend(input);
      isEdited = true;
    }
  };

  dlteBtn.className = "btnDelete";
  dlteBtn.innerHTML = "Delete";
  dlteBtn.onclick = async function () {
    try {
      await TaskService.deleteTask(currentTask);
      await loadList();
    } catch (error) {
      console.log(error);
    }
  };

  cell.appendChild(label);
  cell.appendChild(buttonsWrapper);

  buttonsWrapper.appendChild(editBtn);
  buttonsWrapper.appendChild(dlteBtn);

  listDiv.appendChild(cell);
}
