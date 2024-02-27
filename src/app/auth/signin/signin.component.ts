import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 loginForm: FormGroup;
 submitted = false;
 private  signInResponse:  Array<object> = [];
 constructor(private router: Router,private formBuilder: FormBuilder,private  authService:  AuthService,private spinnerService: Ng4LoadingSpinnerService) { 
    
    }
 ngOnInit() {
       
        this.loginForm = this.formBuilder.group({
            emailSignIn: ['', [Validators.required, Validators.email]],
            passwordSignIn: ['', [Validators.required, Validators.minLength(6)]]
        });
 }
 // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

 signInUser(form:NgForm){
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    const email = form.value.emailSignIn;
    const password = form.value.passwordSignIn;
    this.spinnerService.show();
    this.authService.signInUser(email, password).subscribe((data:  Array<object>) => {
    this.spinnerService.hide();
    console.log("testtest");
    console.log(data);
       if(data){
            /* this.signInResponse  =  data;
            if(data.status){
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('email', data.data.email);
                localStorage.setItem('name', data.data.name);
                localStorage.setItem('customer_id', data.data.customer_id);
                this.router.navigateByUrl('/designer');
            } */
        }
    });
 }
}
