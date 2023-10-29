import { TaskService, Task } from "./TaskService";

const listDiv = document.getElementById("list");
loadList();

document.getElementById("addBtn").addEventListener("click", function () {
  const input = document.getElementById("taskName");
  TaskService.createTask(input.value).then(
    function () {
      loadList();
    },
    function (error) {
      console.log(error);
    }
  );
  input.value = "";
});

function loadList() {
  TaskService.allTasks().then(
    function (tasks) {
      listDiv.innerHTML = "";
      for (const task of tasks) {
        configureCell(task);
      }
    },
    function (error) {
      console.log(error);
    }
  );
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
      TaskService.updateTask(currentTask).then(
        function () {
          loadList();
        },
        function (error) {
          console.log(error);
        }
      );
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
  dlteBtn.onclick = function () {
    TaskService.deleteTask(currentTask).then(
      function () {
        loadList();
      },
      function (error) {
        console.log(error);
      }
    );
  };

  cell.appendChild(label);
  cell.appendChild(buttonsWrapper);

  buttonsWrapper.appendChild(editBtn);
  buttonsWrapper.appendChild(dlteBtn);

  buttonsWrapper.className = "buttonsWrapper";

  listDiv.appendChild(cell);
}
