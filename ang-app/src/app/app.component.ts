import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  async loadTasks() {
    this.tasks = await this.taskService.allTasks();
  }

  async createTask(taskName: string) {
    await this.taskService.createTask(taskName);
    await this.loadTasks();
  }

  async deleteTask(task: Task) {
    await this.taskService.deleteTask(task.id);
    await this.loadTasks();
  }

  async updateTask(task: Task) {
    await this.taskService.updateTask(task);
    await this.loadTasks();
  }
}
