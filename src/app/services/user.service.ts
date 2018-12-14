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
    return this.httpClient.post('/api/user', user).pipe(
      map(res => res));
  }
  login = (user: User) => {
    return this.httpClient.post('/api/login', user).pipe(
      map(res => res));
  }
  getCurrentUser = () => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.get<UserResponse>('/api/user/token', httpOptions).pipe(
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
    return this.httpClient.put<UserResponse>(`/api/api/upload/imageV2/${id}`, payload, httpOptions).pipe(
      map(res => res));
  }
}
