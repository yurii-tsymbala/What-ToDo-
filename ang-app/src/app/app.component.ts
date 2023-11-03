import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks(); // maybe will need to transfer to onChanges()
  }

  async loadTasks() {
    this.tasks = await this.taskService.allTasks();
  }

  createTask(taskName: string) {
    console.log(taskName + "in createTask method");
  }
}
