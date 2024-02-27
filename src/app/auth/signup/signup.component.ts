import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import {Globals} from '../../globals';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
registerForm: FormGroup;
 submitted = false;
 private  signupResponse:  Array<object> = [];
 private  isEmailExistResponse:  String;
  
  constructor(private router: Router,private formBuilder: FormBuilder,private  authService:  AuthService,private globals: Globals) {
    if(globals.role){
        this.router.navigateByUrl('/designer');
    }
     }

  ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            mobileno: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
 get f() { return this.registerForm.controls; }
 signupUser(form:NgForm){
    this.submitted = true;
    if (this.registerForm.invalid) {
            return;
        }
    const email = form.value.email;
    const password = form.value.password;
    const mobileno = form.value.mobileno;
    const name = form.value.name;
    this.authService.signupUser(name, email, password, mobileno).subscribe((data:  Array<object>) => {
            this.signupResponse  =  data;
            console.log(data);
    });
 }

}
