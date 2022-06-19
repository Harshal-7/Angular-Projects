import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService
{
  public ChkPrime(No:number) : boolean
  {
    var i : number = 0;
    var bRet : boolean = false;
    var bFlag : boolean = true;

    for(i = 2; i <= (No/2); i++)
    {
      if(No % i == 0)
      {
        bFlag = false;
        break;
      }
    }
    
    if(bFlag == true)
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
