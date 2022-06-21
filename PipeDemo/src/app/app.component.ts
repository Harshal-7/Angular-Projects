import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public name = "marvellous infosystems PUNE";

  public batches = {"Name" : "PPA" , "Duration" : "4 Months"};

  public today = new Date();

  public No = 1.239;

  public fees = 15000;

}
