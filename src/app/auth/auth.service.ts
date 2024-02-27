import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    API_URL  =  'http://local.br2.com/design/Webservices/';
    constructor(private  httpClient:  HttpClient) {}
    signupUser(name: string, email:string, password: string, mobileno: string){
        console.log("API Response");
        return  this.httpClient.post(`${this.API_URL}customerRegistration`,{
            "name": name,
            "email": email,
            "mobileno": mobileno,
            "password": password
        });
    }
    signInUser(email:string, password: string){
            console.log("API Response");
            return  this.httpClient.post(`${this.API_URL}customerLogin`,{
                "email": email,
                "password": password
            });
    }

  /* isEmailExist(email:string){
            console.log("API Response");
            return  this.httpClient.post(`${this.API_URL}isEmailExist`,{
                "email": email
            });
    }
    */
}
