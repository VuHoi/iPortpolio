import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Home } from '../models/home';
import { Portfolio } from '../models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient: HttpClient) { }
  // get data home
  getHomeDataByName = (name: String) => {
    return this.httpClient.get(`/home/name/${name}`).pipe(
      map(res => res));
  }
  // get data of resume
  getResumeDataByName = (name: String) => {
    return this.httpClient.get(`/information/name/${name}`).pipe(
      map(res => res));
  }
  // post home
  postHomeData = (home: Home) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.post('/api/home/', home, httpOptions).pipe(
      map(res => res));
  }
  // post portfolio
  postPortfolioData = (info: Portfolio) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.post('/api/information/', info, httpOptions).pipe(
      map(res => res));
  }
  // modify resume
  putPortfolioData = (info: Portfolio) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.put(`/api/information/${info._id}`, info, httpOptions).pipe(
      map(res => res));
  }
  // modify home
  putHomeData = (home: Home) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.put(`/api/home/${home._id}`, home, httpOptions).pipe(
      map(res => res));
  }
}
