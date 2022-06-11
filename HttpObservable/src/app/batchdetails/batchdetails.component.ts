import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchdetails',
  template: `
  <h2 [style.color] = "'rgb(37, 0, 245)'"> Batch Details </h2>
  
  <ul *ngFor = "let value of Batches">

    <li>{{value.Name}} with duration {{value.Duration}} Months having fees {{value.Fees}}/-</li>

  </ul>

  `
})
export class BatchdetailsComponent implements OnInit
{
  
  public Batches : any = [];

  constructor(private _obj: BatchserviceService)
  {}

  ngOnInit(): void
  {
    this.Batches = this._obj.GetBatches().subscribe(data => this.Batches = data);
  }

}
