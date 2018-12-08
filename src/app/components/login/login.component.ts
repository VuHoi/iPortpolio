import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

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
      Validators.minLength(8),
      Validators.maxLength(30)

    ])
  });
  username: String = '';
  password: String = '';
  message: String = '';
  remember = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  get getUsername() {
    return this.loginForm.get('username');
  }
  get getPassword() {
    return this.loginForm.get('password');
  }

  login = () => {
    const user: User = {
      username: this.username,
      password: this.password,
      avatar: ''
    };
    this.userService.login(user).subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('remember', this.remember.toString());
      } else {
        this.message = res.message;
      }
    });
  }
}
