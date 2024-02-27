import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from "@angular/material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { DesignerComponent } from './designer/designer.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { Globals } from './globals';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { GooglePlacesDirective } from './google-places.directive';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { RfqGridComponent } from './customer-account/rfq-grid/rfq-grid.component';
import { RfqComponent } from './customer-account/rfq/rfq.component';
import { FavouriteComponent } from './customer-account/favourite/favourite.component';
import { MessageComponent } from './customer-account/message/message.component';
import { NotificationComponent } from './customer-account/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadComponent,
    AuthComponent,
    SigninComponent,
    DesignerComponent,
    HomeComponent,
    SignupComponent,
    HowitworksComponent,
    ContactusComponent,
    SideBarComponent,
    AccountSettingComponent,
    GooglePlacesDirective,
    CustomerAccountComponent,
    RfqGridComponent,
    RfqComponent,
    FavouriteComponent,
    MessageComponent,
    NotificationComponent
    
  ],
  imports: [
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],

  providers: [Globals],
  bootstrap: [AppComponent]

})
export class AppModule { }
