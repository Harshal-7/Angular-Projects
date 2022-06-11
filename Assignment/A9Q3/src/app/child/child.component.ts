import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  template: `
  
  <h2>
    using only 1 Child component
  </h2>

  <h1 [style.color] = "'blue'">
    {{Num}} is {{Ans}}
  </h1>
  
  <h1 [style.color] = "'blue'">
    {{str}} contains {{Cnt}} Capital Characters 
  </h1>
  
  `
})
export class ChildComponent implements OnInit
{
  public str : string = "MarveLLous InfoSystems";
  public Num : number = 17;

  public bRet : boolean = false;
  
  public Ans = "";
  public Cnt = 0;

  constructor(private _obj1 : NumberService,private _obj2 : StringService )
  {}

  ngOnInit(): void
  {
    this.bRet = this._obj1.ChkPrime(this.Num);
    
    if(this.bRet == true)
    {
      this.Ans = "a Prime Number";
    }
    else
    {
      this.Ans = "Not a Prime Number";
    }

    this.Cnt = this._obj2.CountCap(this.str);


  }

}
