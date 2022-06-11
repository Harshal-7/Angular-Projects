import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'A7Q2';

  public str = "Marvellous Infosystems";

  public fun()
  {
    this.str;
  }

}
