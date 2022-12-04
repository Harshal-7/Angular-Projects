import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from '../Tasks';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent
{
  @Input() task : Tasks;
  @Output() deleteTask : EventEmitter<Tasks> = new EventEmitter();
  @Output() doneTask : EventEmitter<Tasks> = new EventEmitter();

  public clicked : boolean = false;

  TaskDelete(task : Tasks)
  {
    this.deleteTask.emit(task);
  }

  TaskDone(task : Tasks)
  {
    this.doneTask.emit(task);
  }

}
