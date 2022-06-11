import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'A7Q3';

  public str = "Marvellous Infosystems";
  public value : any;

  public fun(data : any)
  {
    this.value = data;
  }

}
