import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() btnClickSave = new EventEmitter();
  @Output() btnClickDelete = new EventEmitter();
  isEditing = false; 

  ngOnInit(): void {
  }

  onSaveClicked() {
    this.btnClickSave.emit();
  }

  onEditClicked()  {
   this.isEditing = true;
    
  }

  onDeleteClicked()  {
    this.btnClickDelete.emit(this.task);
  }
}
