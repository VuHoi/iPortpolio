import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),

    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ])
  });
  username: String = '';
  password: String = '';
  confirmPassword: String = '';
  constructor(private userService: UserService, private route: Router) {
  }

  ngOnInit() {
  }
  get getUsername() {
    return this.registerForm.get('username');
  }
  get getPassword() {
    return this.registerForm.get('password');
  }
  get getConfirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  register = () => {
    const user: User = {
      username: this.username,
      password: this.password,
      avatar: ''
    };
    this.userService.register(user).subscribe(res => this.route.navigate(['/login']));
  }

}
