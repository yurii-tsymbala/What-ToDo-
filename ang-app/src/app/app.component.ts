import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './Task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  createTask() {
    console.log('Task created');
  }
}
