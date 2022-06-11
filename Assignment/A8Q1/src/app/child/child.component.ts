import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{
  @Output() public MyEvent = new EventEmitter();

  public SendMsg(data:any)
  {
    this.MyEvent.emit(data);
  }

}
