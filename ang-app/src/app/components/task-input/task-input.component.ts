import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
})
export class TaskInputComponent {
  @Output() btnClick = new EventEmitter();
  taskInput: string = '';
  placeholder = 'What do u want to do?';

  constructor() {}

  onAdd() {
    if (this.taskInput.length < 5) {
      this.taskInput = '';
      this.placeholder = 'Too small )=';
      return;
    }
    this.btnClick.emit(this.taskInput);
    this.taskInput = '';
    this.placeholder = 'What do u want to do?';
  }
}
