import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  register = (user: User) => {
    return this.httpClient.post('/api/user', user).pipe(
      map(res => res));
  }
  login = (user: User) => {
    return this.httpClient.post('/api/login', user).pipe(
      map(res => res));
  }
  getCurrentUser = () => {

    return this.httpClient.get<User>('/api/user/token').pipe(
      map(res => res));
  }
}
