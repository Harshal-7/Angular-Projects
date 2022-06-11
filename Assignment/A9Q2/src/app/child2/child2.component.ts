import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: `

  <h2> Inside Child 2 </h2>

  <h1 [style.color] = "'blue'">
    {{str}} contains {{Cnt}} Capital Characters
  <h1>
  
  `
})
export class Child2Component implements OnInit
{
  public str : string = "MarveLLous InfoSystems";
  public Cnt = 0;

  constructor(private _obj : StringService)
  {}

  ngOnInit(): void
  {
    this.Cnt = this._obj.CountCap(this.str);
  }

}
