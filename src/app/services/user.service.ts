import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { UserResponse } from '../models/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  register = (user: User) => {
    return this.httpClient.post('/user', user).pipe(
      map(res => res));
  }
  login = (user: User) => {
    return this.httpClient.post('/login', user).pipe(
      map(res => res));
  }
  getCurrentUser = () => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.get<UserResponse>('/user/token', httpOptions).pipe(
      map(res => res));
  }
}
