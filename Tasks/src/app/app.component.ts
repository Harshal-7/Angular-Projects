import { Component, Input } from '@angular/core';
import { Tasks } from 'src/app/Tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  @Input() task : Tasks;
  public tasks : Tasks[] = [];
  
  sno : number = 0
  title : string = "";
  desc : string = "";


  AddTask(task:Tasks)
  {
    console.log(task);
    this.tasks.push(task);
  }

}
