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

  changeImage = (id: String, avatar: String) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    const payload = { avatar };
    return this.httpClient.put<UserResponse>(`/api/upload/imageV2/${id}`, payload, httpOptions).pipe(
<<<<<<< HEAD
=======
      map(res => res));
  }

  getAvatarByName(username: String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.get<String>(`/user/avatar/${username}`, httpOptions).pipe(
>>>>>>> 72acd828d67c52aae3cc408c1aab15816c3be236
      map(res => res));
  }
}
