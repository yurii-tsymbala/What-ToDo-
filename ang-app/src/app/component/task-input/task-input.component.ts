import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
})
export class TaskInputComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  placeholder = 'What do u want to do?';

  constructor() {}

  ngOnInit(): void {}

  onAdd(taskName: HTMLInputElement) {
    if (taskName.value.length < 5) {
      taskName.value = '';
      this.placeholder = 'Too small )=';
      return;
    }
    this.btnClick.emit(taskName.value);
    taskName.value = '';
    this.placeholder = 'What do u want to do?';
  }
}
