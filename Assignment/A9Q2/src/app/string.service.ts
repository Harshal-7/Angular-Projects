import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  public CountCap(str:string) : number
  {
    var Count : number = 0;
    var i : number = 0;

    for(i = 0; i < str.length; i++)
    {
      if(str[i] >= 'A' && str[i] <= 'Z')
      {
        Count++;
      }
    }

    return Count;
  }

  constructor() { }
}
