import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  role: string = localStorage.getItem('name');
}