import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { UserResponse } from '../models/UserResponse';
import { interval } from 'rxjs';

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
    return this.httpClient.get<UserResponse>('/user/token').pipe(
      map(res => res));
  }

  changeImage = (id: String, avatar: String) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    const payload = { avatar };
    return this.httpClient.put<UserResponse>(`/api/upload/imageV2/${id}`, payload, httpOptions).pipe(
      map(res => res));
  }

  getAvatarByName(username: String) {
    return this.httpClient.get<String>(`/user/avatar/${username}`).pipe(
      map(res => res));
  }
  checkUserExiting(username: String) {
    return this.httpClient.get<String>(`/user/exiting/${username}`).pipe(
      map(res => res));
  }
getAllUser() {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
    })
  };
  return this.httpClient.get('/api/user', httpOptions);
}
}
