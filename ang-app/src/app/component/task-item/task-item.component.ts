import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  isEditing = false; 

  ngOnInit(): void {
  }

  onSaveClicked() {}

  onEditClicked() {}

  onDeleteClicked() {}
}
