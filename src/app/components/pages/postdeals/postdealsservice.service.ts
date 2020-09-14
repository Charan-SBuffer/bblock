import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import ContractDetails from 'src/app/models/ContractDetails';

@Injectable({
  providedIn: 'root'
})
export class PostdealsserviceService {

  constructor() { }

  cntractdetails = new BehaviorSubject(new ContractDetails('','','','','','','','','',new Date(),new Date()));

 currrentcontract = this.cntractdetails.asObservable();

 changeinContractDetails(contract : ContractDetails){
   return this.cntractdetails.next(contract);
 }

}
