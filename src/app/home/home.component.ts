import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     isNotLogin=true;
  constructor(private globals: Globals) { 
    if(localStorage.getItem('token') != null){
        this.isNotLogin=false;
    }
    console.log(this.isNotLogin);
    }

  ngOnInit() {
  }

}
