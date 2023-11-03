import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
})
export class TaskInputComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  taskName: string = 'Earn 5k$';
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit(this.taskName);
  }
}
