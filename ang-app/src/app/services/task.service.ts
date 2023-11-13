import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[];

  constructor() {
    this.tasks = [
      { id: '4234234', name: 'Buy pizza' },
      { id: '234234234', name: 'Sold car' },
      { id: '42342342344', name: 'Rent house' },
    ];
  }

  async createTask(name: string) {
    let task = new Task(name);
    this.tasks.unshift(task);
  }

  async updateTask(task: Task) {
    const id = task.id;
    const taskInDB = this.tasks.find((el) => el.id === id);
    if (taskInDB) {
      console.log(taskInDB);
      
      taskInDB.name = task.name;
    }
  }

  async deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  async allTasks() {
    return this.tasks;
  }
}
