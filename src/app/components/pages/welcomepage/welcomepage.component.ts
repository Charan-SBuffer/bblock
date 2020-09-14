import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from 'src/app/models/UserDetails';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  @Input() user:UserDetails=JSON.parse(sessionStorage.getItem('currentuser'))
  constructor() { }

  ngOnInit() {
   
  }

}
