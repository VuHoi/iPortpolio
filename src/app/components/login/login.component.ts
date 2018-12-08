import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [
     Validators.required,
     Validators.minLength(3),
     Validators.maxLength(30),

    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)

     ])
  });
  constructor() { }

  ngOnInit() {
  }
  get getUsername() {
    return  this.loginForm.get('username');
   }
   get getPassword() {
    return  this.loginForm.get('password');
   }
}
