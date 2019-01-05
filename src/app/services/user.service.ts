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
    return this.httpClient.post('/api/user', user).pipe(
      map(res => res));
  }
  login = (user: User) => {
    return this.httpClient.post('/api/login', user).pipe(
      map(res => res));
  }
  getCurrentUser = () => {
    return this.httpClient.get<UserResponse>('/api/user/token').pipe(
      map(res => res));
  }

  changeImage = (id: String, avatar: String) => {
    const payload = { avatar };
    return this.httpClient.put<UserResponse>(`/api/api/upload/imageV2/${id}`, payload).pipe(
      map(res => res));
  }

  getAvatarByName(username: String) {
    return this.httpClient.get<String>(`/api/user/avatar/${username}`).pipe(
      map(res => res));
  }
  checkUserExiting(username: String) {
    return this.httpClient.get<String>(`/api/user/exiting/${username}`).pipe(
      map(res => res));
  }
getAllUser() {
  return this.httpClient.get('/api/api/user');
}
}
