import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  // public str : string = "";
  public Name : string = "Marvellous";
  public str : string = "Name is ";

  // public MyName(value:string)
  // {
  //   this.Name = value;
  //   return this.Name;
  // }

}
