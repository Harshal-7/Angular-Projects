import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'A8Q2';

  public Data : any;

  public SendMsgFromParent = "Hello From Parent";

}
