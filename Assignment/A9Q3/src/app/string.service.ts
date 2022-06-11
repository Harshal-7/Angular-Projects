import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService
{
  public Count : number = 0;
  public i : number = 0;

  public CountCap(str:string) : number
  {
    for(this.i = 0; this.i < str.length; this.i++)
    {
      if(str[this.i] >= 'A' && str[this.i] <= 'Z')
      {
        this.Count++;
      }
    }

    return this.Count;
  }

  constructor() { }
}
