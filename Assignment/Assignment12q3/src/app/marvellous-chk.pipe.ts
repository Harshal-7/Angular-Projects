import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, Param : string): any
  {

    var i : number = 0;
    var bRet : boolean = true;
    var Sum : number = 0;

    if(Param == "Prime")
    {
      for(i = 2; i < value; i++)
      {
        if(value % i == 0)
        {
          bRet = false;
          break;
        }
      }
      
      if(bRet == true)
      {
        return "It is a Prime Number";
      }
      else
      {
        return "It is Not a Prime Number";
      }
    }

    else if(Param == "Perfect")
    {
      for(i = 1; i <= (value/2); i++)
      {
        if(value % i == 0)
        {
          Sum = Sum + i;
        }
      }

      if(Sum == value)
      {
        return "It is a Perfet Number";
      }
      else
      {
        return "It is Not a Perfet Number";
      }
    }

    else if(Param == "Even")
    {
      if(value % 2 == 0)
      {
        return "It is an Even Number";
      }
      else
      {
        return "It is Not an Even Number";
      } 
    }

    else if(Param == "Odd")
    {
      if(value % 2 != 0)
      {
        return "It is a Odd Number";
      }
      else
      {
        return "It is Not a Odd Number";
      }
    }
  
  }
}
