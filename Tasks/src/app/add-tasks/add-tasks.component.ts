import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/Tasks';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent
{
  public title : string = "";
  public desc : string = "";

  @Output() addTask : EventEmitter<Tasks> = new EventEmitter();

  iCnt : number = 0;

  OnSubmit()
  {
    console.log(this.title + " inside ");

    const task = {
      sno : ++this.iCnt,
      title : this.title,
      desc : this.desc
    }

    this.addTask.emit(task);

  }

}
