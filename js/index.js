import { TaskService, Task } from "./TaskService";

let task = new Task("Wash the dishes");
console.log(task);

let taskService = new TaskService();
console.log(taskService.allTasks());
