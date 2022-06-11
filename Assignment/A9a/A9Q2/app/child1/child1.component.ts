import { asNativeElements, Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  template: `
  
  <h2> Inside Child 1 </h2>

  <h1 [style.color] = "'blue'"> 
    {{Num}} is {{Ans}} 
  <h1>
  
  `
})
export class Child1Component implements OnInit 
{
  public bRet : boolean = false;
  public Ans : string = "";
  public Num : number = 17;

  constructor(private _obj : NumberService)
  {}

  ngOnInit(): void
  {
    this.bRet = this._obj.ChkPrime(this.Num);

    if(this.bRet == true)
    {
      this.Ans = "a Prime Number";
    }
    else
    {
      this.Ans = "Not a Prime Number";
    }

  }


}
