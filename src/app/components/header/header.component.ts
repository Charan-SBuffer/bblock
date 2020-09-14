import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from 'src/app/models/UserDetails';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() userdetails : UserDetails = JSON.parse(sessionStorage.getItem('currentuser'));
  constructor(private router : Router) { }

  logOut(){
    sessionStorage.removeItem('currentuser');
this.router.navigateByUrl('/signin');
}
   
  ngOnInit() {
  }

}
