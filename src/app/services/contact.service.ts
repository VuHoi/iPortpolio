import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }
  postContact = (contact: Contact, username: String) => {
    return this.httpClient.post(`/api/contact/${username}`, contact).pipe(
      map(res => res));
  }
}
