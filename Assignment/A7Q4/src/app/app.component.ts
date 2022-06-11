import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'A7Q4';

  public upr = "";
  public lwr = "";

  public upper()
  {
    this.upr = "MARVELLOUS INFOSYSTEMS";
  }

  public lower()
  {
    this.lwr = "marvellous infosystems";
  }

}
