import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import ContractDetails from 'src/app/models/ContractDetails';
import { PostdealsserviceService } from '../postdeals/postdealsservice.service';

@Component({
  selector: 'app-contractdetails',
  templateUrl: './contractdetails.component.html',
  styleUrls: ['./contractdetails.component.css']
})
export class ContractdetailsComponent implements OnInit,OnChanges {


  newcontractdetails : ContractDetails;

    lisofcontracts = [ 
     (new ContractDetails('CNTRT01','USER11','','HYD','R','1 MONTHS','MWEFOMEWFM OM O OEWMO ','OENVO NWONONOWNO WO NWOENFOWNFO NO W','L',new Date(),new Date())),
   (new ContractDetails('CNTRT04','USER72','','BNG','B','5 MONTHS','MWEFOMEWFM OM O OEWMO ','OENVO NWONONOWNO WO NWOENFOWNFO NO W','S',new Date(),new Date())),
   (new ContractDetails('CNTRT74','USER02','','PNJ','B','2 MONTHS','MWEFOMEWFM OM O OEWMO ','OENVO NWONONOWNO WO NWOENFOWNFO NO W','M',new Date(),new Date())),
   (new ContractDetails('CNTRT55','USER45','','TN','R','3 MONTHS','MWEFOMEWFM OM O OEWMO ','OENVO NWONONOWNO WO NWOENFOWNFO NO W','L',new Date(),new Date())),
   (new ContractDetails('CNTRT41','USER51','','DL','B','6 MONTHS','MWEFOMEWFM OM O OEWMO ','OENVO NWONONOWNO WO NWOENFOWNFO NO W','M',new Date(),new Date())),
    ]
  
  constructor( private postdetails : PostdealsserviceService) {}
   

  ngOnChanges() {
    this.postdetails.currrentcontract
    .subscribe((data)=>
    this.newcontractdetails=data
    )}



  ngOnInit( ) {    
 
   }
 


}
