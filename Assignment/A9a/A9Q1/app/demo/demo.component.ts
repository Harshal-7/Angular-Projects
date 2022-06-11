import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit 
{
  
  public AddAns : number = 0;
  public SubAns : number = 0;

  constructor(private _obj: ArithmeticService)
  {}

  ngOnInit(): void
  {
    this.AddAns = this._obj.Add(20,10);
    this.SubAns = this._obj.Sub(20,10);
  }

}
