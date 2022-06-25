import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, Param: number): number
  {
    var Mult : number = 0;
    Mult = value * Param;
    return Mult;
    
  }

}
