import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchserviceService
{
  public GetBatches()
  {
    return [
      {"Name":"PPA","Duration":4,"Fees":16500},
      {"Name":"LB","Duration":3,"Fees":17000},
      {"Name":"PYTHON","Duration":5,"Fees":15000}
    ];

  }


  constructor() { }
}
