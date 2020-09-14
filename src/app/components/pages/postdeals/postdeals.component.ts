import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDetails } from 'src/app/models/UserDetails';
import { NotificationserviceService } from 'src/app/services/notificationservice.service';
import { Router } from '@angular/router';
import ContractDetails from 'src/app/models/ContractDetails';
import { PostdealsserviceService } from './postdealsservice.service';

@Component({
  selector: 'app-postdeals',
  templateUrl: './postdeals.component.html',
  styleUrls: ['./postdeals.component.css']
})
export class PostdealsComponent implements OnInit {

  private contractdetails : ContractDetails;
private notification : NotificationserviceService;


  contractDetailsForm = new FormGroup({
    contractdetailsid  : new FormControl(''),
    useridSeller  : new FormControl(''),
    useridBuyer  : new FormControl(''),
    worklocation : new FormControl(''),
    worktype : new FormControl(''),
    workperiod : new FormControl(''),
    workdescription : new FormControl(''),
    contractsummary : new FormControl(''),
    scale : new FormControl(''),
    bidstartdate : new FormControl(''),
    bidenddate : new FormControl(''),
  });

@Input()   user : UserDetails =JSON.parse(sessionStorage.getItem('currentuser'));
  constructor(private router : Router, private postservice : PostdealsserviceService) {}

  onSubmit = () => {    
     if(!this.contractDetailsForm.valid) this.notification.showInfo("Error In the Information Form","Invalid!");
       else  this.contractdetails = this.contractDetailsForm.value;
    this.contractdetails.useridSeller=this.user.userid;
    this.contractdetails.contractdetailsid='CNTRT14';
    this.postservice.changeinContractDetails(this.contractdetails);
    this.router.navigateByUrl("/contractdetails");
}

  ngOnInit() {
  }

 newContract(){
 }

}
