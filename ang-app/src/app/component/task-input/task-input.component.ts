import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
})
export class TaskInputComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onAdd(taskName: HTMLInputElement) {
    if (taskName.value.length < 5) {
      taskName.value = '';
      taskName.placeholder = 'Too small )=';
      return;
    }
    this.btnClick.emit(taskName.value);
    taskName.value = '';
    taskName.placeholder = 'What do u want to do?';
  }
}
