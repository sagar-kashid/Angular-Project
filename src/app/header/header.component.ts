import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';
import { AuthService } from '../auth/auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNotLogin=true;
  constructor(private globals: Globals,private router: Router) {
    if(localStorage.getItem('token') != null){
        this.isNotLogin=false;
    }
    console.log(this.isNotLogin);
    }
  ngOnInit() {
  }
logout(){
   console.log("Logut successfully !!");
   localStorage.clear();
   this.router.navigateByUrl('/designer');
 }
}
