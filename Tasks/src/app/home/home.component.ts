import { Component, Input } from '@angular/core';
import { Tasks } from 'src/app/Tasks';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  @Input() task : Tasks;
  public tasks : Tasks[] = [];
  public localItem;

  constructor(){
    this.localItem = localStorage.getItem("tasks");
    if(this.localItem == null)
    {
      this.tasks = [];
    }
    else{
      this.tasks = JSON.parse(this.localItem); 
    }
  }
  
  sno : number = 0
  title : string = "";
  desc : string = "";
  completedTaskTitle : string  = "";
  completedTaskDesc : string  = "";
  completedTaskSno : number = 0;

  AddTask(task:Tasks)
  {
    console.log(task);
    this.tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

  DeleteTask(task : Tasks)
  {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }
 
  DoneTask(task : Tasks)
  {
    const index = this.tasks.indexOf(task);
    
    this.completedTaskTitle = " ✓ " + this.tasks[index].title;

    this.tasks[index].title = this.completedTaskTitle;
    this.tasks[index].desc = this.completedTaskDesc;

    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

}