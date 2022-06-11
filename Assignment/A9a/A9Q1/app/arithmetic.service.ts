import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService
{
  public Ans : number = 0;

  public Add(No1:number,No2:number)
  {
    this.Ans = No1 + No2;
    return this.Ans;
  }

  public Sub(No1:number,No2:number)
  {
    this.Ans = No1 - No2;
    return this.Ans;
  }

  constructor() { }
}
