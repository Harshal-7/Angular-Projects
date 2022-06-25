import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform
{
  transform(Param: string): unknown 
  {
    var temp:string[] = [];
    var i : number = 0;
    var iCnt : number = 0;
    
    for(i = (Param.length - 1); i >= 0; i--,iCnt++)
    {
      temp[iCnt] = Param[i];
    }
    return temp;
  }   

}
