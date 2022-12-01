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
  
  sno : number = 0
  title : string = "";
  desc : string = "";


  AddTask(task:Tasks)
  {
    console.log(task);
    this.tasks.push(task);
  }


}