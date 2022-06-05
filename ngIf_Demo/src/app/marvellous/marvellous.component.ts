import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  templateUrl: './marvellous.component.html',
  styleUrls: ['./marvellous.component.css']
})
export class MarvellousComponent
{
  public flag = true;
  public Food = false;

  public str = "";

  public Veg()
  {
    this.str = "Please consider Veg Food Menu"
  }

  public NonVeg()
  {
    this.str = "Please consider NonVeg Food Menu"
  }

}
