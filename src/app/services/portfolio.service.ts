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
  getHomeDataByName = (name: String) => {
    return this.httpClient.get(`/api/home/name/${name}`).pipe(
      map(res => res));
  }
  getResumeDataByName = (name: String) => {
    return this.httpClient.get(`/api/information/name/${name}`).pipe(
      map(res => res));
  }
  postHomeData = (home: Home) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post('/api/home/', home, httpOptions).pipe(
      map(res => res));
  }
  postPortfolioData = (info: Portfolio) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post('/api/information/', info, httpOptions).pipe(
      map(res => res));
  }
}
