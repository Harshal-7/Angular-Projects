import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService
{
  public Add(No1:number,No2:number)
  {
    var Ans : number = 0;
    Ans = No1 + No2;
    return Ans;
  }

  public Sub(No1:number,No2:number)
  {
    var Ans : number = 0;
    Ans = No1 - No2;
    return Ans;
  }

  constructor() { }
}
