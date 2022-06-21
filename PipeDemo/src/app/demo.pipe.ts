import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform
{
//    {{"Marvellous Pune" | demo : "PPA" : "Python" : "Angular"}}

  transform(value: unknown, ...args: unknown[]): unknown
  {
    var str : string = "";

    if(args[0] = "PPA")
    {
      str = "Batch start from 9 July in " + value;
    }
    else if(args[1])
    {
      str = "Batch start from 9 August in " + value;
    }


    return str;
  }

}
