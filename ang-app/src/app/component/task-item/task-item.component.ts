import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() btnClickUpdate = new EventEmitter();
  @Output() btnClickDelete = new EventEmitter();
  isEditing = false;

  ngOnInit(): void {}

  onUpdateClicked(taskUpdateName: HTMLInputElement) {
    if (taskUpdateName.value.length < 5) {
      taskUpdateName.value = '';
      taskUpdateName.placeholder = 'Too small )=';
      return;
    }
    this.task.name = taskUpdateName.value;
    this.btnClickUpdate.emit(this.task);
  }

  onEditClicked(taskUpdateName: HTMLInputElement) {
    taskUpdateName.value = this.task.name;
    this.isEditing = true;
  }

  onDeleteClicked() {
    this.btnClickDelete.emit(this.task);
  }
}
