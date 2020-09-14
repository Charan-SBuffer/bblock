import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/pages/welcomepage/welcomepage.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import {ContractdetailsComponent} from './components/pages/contractdetails/contractdetails.component';
import { PostdealsComponent } from './components/pages/postdeals/postdeals.component';


const routes: Routes = [
  {
    path : "signin" ,
     component : SigninComponent
    },
    {
      path : "signup",
      component : SignupComponent 
     },
     {
    path  :  "contractdetails",
     component : ContractdetailsComponent
     },
     {
       path : "postdeals",
       component : PostdealsComponent
     },
     {
      path : "home",
      component : WelcomepageComponent
     },
    {
      path : "**",
      component : NotfoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
