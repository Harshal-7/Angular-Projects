import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, Param: number): number 
  {
    var Ret : number = 0;
    Ret = Param + value;
    return Ret;

  }

}
