import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  template: `<h2 [style.color] = "'blue'">Batch Details</h2>
  
  <div *ngFor = "let value of Batches">
    
      <li>{{value.Name}} with Duration {{value.Duration}} Months having Fees {{value.Fees}}</li>
    
  </div>
  
  `
})
export class BatchdetailsComponent implements OnInit
{
  public Batches=[
  {"Name":"PPA","Duration":4,"Fees":16500},
  {"Name":"LB","Duration":3,"Fees":17000},
  {"Name":"PYTHON","Duration":5,"Fees":15000},
  ];


  constructor() {}

  ngOnInit(): void 
  {}


}
