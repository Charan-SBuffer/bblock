import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators } from '@angular/forms';
import { UserDetails } from 'src/app/models/UserDetails';
import {Router} from '@angular/router'
import { NotificationserviceService } from 'src/app/services/notificationservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private userdetails : UserDetails;
  message : string;
  notification  :NotificationserviceService;
  
  signup = new FormGroup({
    userid  : new FormControl(''),
    name : new FormControl(''),
    password : new FormControl(''),
    mobilenumber : new FormControl(''),
    email : new FormControl(''),
    verified : new FormControl(''),
  });

  
  constructor(private  router : Router) { }

  ngOnInit() {
    
  }

  onSubmit(){    
      if(this.signup.value!=null)
      { 
      this.userdetails=this.signup.value; 
      this.userdetails.userid="USER01";
      this.userdetails.verified=false;
      console.log(this.userdetails);
      sessionStorage.setItem('currentuser',JSON.stringify(this.userdetails));
      this.router.navigateByUrl("/signin");
     // this.notification.showInfo(`use ${this.userdetails.email} & ${this.userdetails.password} to Login`,`Welcome ${this.userdetails.name}`);
    } else
    {
        this.notification.showError("Check the Enterd Data","Form Invalid!");
      }
  }

}
