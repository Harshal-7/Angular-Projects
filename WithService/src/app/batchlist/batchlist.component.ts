import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchlist',
  template: `
  <h2 [style.color] = "'rgb(37, 0, 245)'"> Batch List </h2>

  <ul *ngFor = "let value of Batches">
    {{value.Name}}
  </ul>
  
  `
})
export class BatchlistComponent implements OnInit
{
  
  public Batches : any = [];

  constructor(private _obj: BatchserviceService)
  {}

  ngOnInit(): void
  {
    this.Batches = this._obj.GetBatches();
  }

}
