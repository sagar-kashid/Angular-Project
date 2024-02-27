import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    API_URL  =  'http://local.br2.com/design/webservices/';
    constructor(private  httpClient:  HttpClient) {}
    getDesigners(){
        return  this.httpClient.get(`${this.API_URL}getCountryList`);
    }
    
}
