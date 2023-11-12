import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent{
  @Input() task!: Task;
  @Output() btnClickUpdate = new EventEmitter();
  @Output() btnClickDelete = new EventEmitter();
  taskInput = '';
  placeholder = 'Update the task';
  isEditing = false;

  onUpdateClicked() {
    if (this.taskInput.length < 5) {
      this.placeholder = 'Too small )=';
      this.taskInput = '';
      return;
    }
    this.task.name = this.taskInput;
    this.btnClickUpdate.emit(this.task);
    this.isEditing = false;
  }

  onEditClicked() {
    this.taskInput = this.task.name;
    this.isEditing = true;
  }

  onDeleteClicked() {
    this.btnClickDelete.emit(this.task);
  }
}
