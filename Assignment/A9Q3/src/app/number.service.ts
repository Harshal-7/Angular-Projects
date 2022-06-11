import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService
{
  public bRet:boolean = false;
  public i : number = 0;
  public bFlag : boolean = true;

  public ChkPrime(No:number) : boolean
  {
    for(this.i = 2; this.i <= (No/2); this.i++)
    {
      if(No % this.i == 0)
      {
        this.bFlag = false;
        break;
      }
    }  
    
    if(this.bFlag == true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  constructor() { }
}
