import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/TODO';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent
{
  title:string = "";
  desc:string = "";
  iCnt:number = 0;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit()
  {
    this.iCnt++;

    const todo = {
      sno : this.iCnt,
      title : this.title,
      desc : this.desc,
      active : true
    } 
    
    this.todoAdd.emit(todo);
  }

}
