import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{
  @Output() public MyEvent = new EventEmitter();

  @Input() public Data1 : any;
  
  public Message = "Hello From Child";

  public SendMsgFromChild()
  {
    this.MyEvent.emit(this.Message);
  }


}
