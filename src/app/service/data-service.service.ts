import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {Observable} from "rxjs";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
@Injectable({
  providedIn: 'root'
}) 
export class DataServiceService {  
  
  private headers = new Headers({ 'Content-Type': 'application/json' });  
  _baseUrl: string = '';  
  
  // For Using Fake API by Using It's URL  
  constructor(private  httpClient:  HttpClient) {  
    this._baseUrl = "http://local.br2.com/design/Webservices/";  
  }  
  // To fill the Datatable for Default Table [Dummy Data]  
  public GetRfqsData() {  
        console.log("API Response");
            return  this.httpClient.get(`${this._baseUrl}getRfqs`,{
            });
  }  
    public GetRfqs(): Observable { 
    
      /*   let fakeUsers : User[] = [{rfq_id: 1, customer_id: 5, rfq_description: 'test', status: 'H',rfq_amount:500},
{rfq_id: 2, customer_id: 8, rfq_description: 'test', status: 'H',rfq_amount:500},
  
        ];
        return of(fakeUsers).delay(500);*/
        return this.httpClient.get(`${this._baseUrl}getRfqs`,{
            });
      }
}  