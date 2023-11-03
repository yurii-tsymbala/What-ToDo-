import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  isEditing = false; 

  ngOnInit(): void {
  }

  onSaveClicked() {}

  onEditClicked()  {
    console.log("Edit clicked");
    
  }

  onDeleteClicked()  {
    console.log("Delete clicked");
  }
}
