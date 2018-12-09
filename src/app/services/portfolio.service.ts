import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient: HttpClient) { }
  getHomeData = () => {
    return this.httpClient.get('/api/home').pipe(
      map(res => res));
  }
}
