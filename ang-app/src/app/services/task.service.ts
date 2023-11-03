import { Injectable } from '@angular/core';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  createTask(name: string) {
    return new Promise<void>(function (myResolve, myReject) {
      let task = new Task(name);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3001/addtask', true);
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.onload = function () {
        if (xhr.status === 201) {
          myResolve();
        } else {
          myReject('Failed to create task');
        }
      };
      xhr.send(JSON.stringify(task));
    });
  }

  updateTask(task: Task) {
    return new Promise<void>(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open('PUT', 'http://localhost:3001/' + task.id, true);
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.onload = function () {
        if (xhr.status === 204) {
          myResolve();
        } else {
          myReject('Failed to update task');
        }
      };
      xhr.send(JSON.stringify(task));
    });
  }

  deleteTask(taskId: string) {
    return new Promise<void>(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open('DELETE', 'http://localhost:3001/' + taskId, true);
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.onload = function () {
        if (xhr.status === 200) {
          myResolve();
        } else {
          myReject('Failed to delete task');
        }
      };
      xhr.send();
    });
  }

  allTasks() {
    return new Promise<Task[]>(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:3001/tasks');
      xhr.onload = function () {
        if (xhr.status === 200) {
          const tasks: Task[] = JSON.parse(xhr.responseText);
          myResolve(tasks);
        } else {
          myReject('Failed to fetch tasks');
        }
      };
      xhr.send();
    });
  }
}