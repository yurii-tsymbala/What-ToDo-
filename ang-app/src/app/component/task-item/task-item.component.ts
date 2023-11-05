import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() btnClickUpdate = new EventEmitter();
  @Output() btnClickDelete = new EventEmitter();
  taskInput = '';
  placeholder = 'Update the task';
  isEditing = false;

  ngOnInit(): void {}

  onUpdateClicked() {
    if (this.taskInput.length < 5) {
      this.placeholder = 'Too small )=';
      this.taskInput = '';
      return;
    }
    this.task.name = this.taskInput;
    this.btnClickUpdate.emit(this.task);
  }

  onEditClicked() {
    this.taskInput = this.task.name;
    this.isEditing = true;
  }

  onDeleteClicked() {
    this.btnClickDelete.emit(this.task);
  }
}
