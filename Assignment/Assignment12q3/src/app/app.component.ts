import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public Val : number = 0;

  public Data(num:any)
  {
    this.Val = num;
  }

}
