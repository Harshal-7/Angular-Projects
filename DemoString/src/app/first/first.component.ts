import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})

export class FirstComponent
{
  // Characteristics
  name : string = "Harshal Ramdas Shinde";

  // Behaviour
  Display() : string
  {
    var ret : string = "Hello " + this.name;
    return ret;
  }

  Addition(no1:number,no2:number)
  {
    return no1 + no2;
  }


}
