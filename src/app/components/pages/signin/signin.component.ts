import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';
import { NotificationserviceService } from 'src/app/services/notificationservice.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    userid  = new FormControl('');
    password =  new FormControl('');



  @Input()   user : UserDetails =JSON.parse(sessionStorage.getItem('currentuser'));
  constructor  (private router : Router,private notifications : NotificationserviceService) {}

validate = ( ) => {
  console.log("this is SIgnIN"+this.user)
if
(this.userid.value==this.user.userid && this.password.value==this.user.password)
{
  this.router.navigateByUrl("/home");
  this.notifications.showInfo("LogIN Was Sucessfull","Welcome");
}
else
{
  this.notifications.showWarning("Dailing 100..","Hacker");
}
}

  ngOnInit() {}


 
  }

