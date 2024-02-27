import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
trigger('myAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
       [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]),

  ], // register the animations
})

export class AppComponent {
    route: string;
    template: string =`<img width="100%" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`
    title = '1Design';
    name = 'Arun Salokhe';
    showMenu=true;
    constructor(location: Location, router: Router) {
        router.events.subscribe((val) => {
        if(location.path() != '/home'  ){
                this.showMenu = true;
              }else{
                this.showMenu = false;
                }
        });
    }
}

