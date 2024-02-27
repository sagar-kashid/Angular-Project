import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { DesignerComponent } from "./designer/designer.component";
import { HomeComponent } from "./home/home.component";
import { HowitworksComponent } from "./howitworks/howitworks.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { CustomerAccountComponent } from "./customer-account/customer-account.component";
import { RfqGridComponent } from "./customer-account/rfq-grid/rfq-grid.component";
import { RfqComponent } from './customer-account/rfq/rfq.component';
import { FavouriteComponent } from './customer-account/favourite/favourite.component';
import { MessageComponent } from './customer-account/message/message.component';
import { NotificationComponent } from './customer-account/notification/notification.component';
const routes:Routes =[
{ path:'signin',component:SigninComponent},
{ path:'signup',component:SignupComponent},
{ path:'designer',component:DesignerComponent},
{ path:'home',component:HomeComponent},
{ path:'howitworks',component:HowitworksComponent},
{ path:'contactus',component:ContactusComponent},
{ path:'account-setting',component:AccountSettingComponent},
{ path:'customer-account',component:CustomerAccountComponent},
{ path:'rfq-grid',component:RfqGridComponent},
{ path:'rfq',component:RfqComponent},
{ path:'favourite',component:FavouriteComponent},
{ path:'message',component:MessageComponent},
{ path:'notification',component:NotificationComponent},
{ path: '', redirectTo: '/designer', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
