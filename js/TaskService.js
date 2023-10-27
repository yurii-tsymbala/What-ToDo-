import { v4 as uuid } from "uuid";

export class Task {
  constructor(name) {
    this.name = name;
    this.id = uuid();
  }
}

export class TaskService {
  constructor() {
    this.tasks = this.generateDefaultTasks();
  }

  createTask(name) {
    let task = new Task(name);
    this.tasks.push(task);
  }

  updateTask(task) {
    let updatedTask = this.tasks.find((el) => el.id === task.id);
    updatedTask.name = task.name;
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((el) => el.id !== task.id);
  }

  allTasks() {
    return this.tasks;
  }

  generateDefaultTasks() {
    let task1 = new Task("Buy pizza");
    let task2 = new Task("Buy bread");
    let task3 = new Task("Buy milk");
    return [task1, task2, task3];
  }
}
