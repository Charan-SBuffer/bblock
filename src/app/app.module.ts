import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {environment} from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {AngularFireAuthModule} from '@angular/fire/auth';
  // import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireModule} from "@angular/fire";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomepageComponent } from './components/pages/welcomepage/welcomepage.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { UserComponent } from './components/pages/user/user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { ContractdetailsComponent} from './components/pages/contractdetails/contractdetails.component';
import { MarketComponent } from './components/pages/market/market.component';
import { PostdealsComponent } from './components/pages/postdeals/postdeals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomepageComponent,
    NotfoundComponent,
    SignupComponent,
    UserComponent,
    FooterComponent,
    SigninComponent,
    ContractdetailsComponent,
    MarketComponent,
    PostdealsComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    HttpClientModule,
ReactiveFormsModule,
BrowserAnimationsModule,
  BrowserModule,
    AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
