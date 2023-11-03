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

  onKey(event: any) { // without type info
    this.taskName = event.target.value;
    console.log(event.target.value);
  }

  onAdd() {
    this.btnClick.emit();
    console.log("clicked in TaskInput");
    
    
  }
}
