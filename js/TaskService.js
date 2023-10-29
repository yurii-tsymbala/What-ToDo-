import { v4 as uuid } from "uuid";

export class Task {
  constructor(name) {
    this.id = uuid();
    this.name = name;
  }
}

export const TaskService = new (class {
  constructor() {}

  createTask(name) {
    return new Promise(function (myResolve, myReject) {
      let task = new Task(name);
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3001/addtask", true);
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.onload = function () {
        if (xhr.status == 201) {
          myResolve();
        } else {
          myReject("Failed to create task");
        }
      };
      xhr.send(JSON.stringify(task));
    });
  }

  updateTask(task) {
    return new Promise(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open("PUT", "http://localhost:3001/" + task.id, true);
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.onload = function () {
        if (xhr.status == 204) {
          myResolve();
        } else {
          myReject("Failed to update task");
        }
      };
      xhr.send(JSON.stringify(task));
    });
  }

  deleteTask(task) {
    return new Promise(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open("DELETE", "http://localhost:3001/" + task.id, true);
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.onload = function () {
        if (xhr.status == 200) {
          myResolve();
        } else {
          myReject("Failed to delete task");
        }
      };
      xhr.send(JSON.stringify(task));
    });
  }

  allTasks() {
    return new Promise(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:3001/tasks");
      xhr.onload = function () {
        if (xhr.status == 200) {
          const tasks = JSON.parse(xhr.responseText);
          myResolve(tasks);
        } else {
          myReject("Tasks not found");
        }
      };
      xhr.send();
    });
  }
})();
