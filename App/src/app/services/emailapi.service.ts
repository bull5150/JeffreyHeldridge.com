import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { email } from '../models/email_models';

@Injectable({
  providedIn: 'root'
})
export class EmailapiService {

  constructor(private http: HttpClient) { }

  public postEmail(email: email)
  {
    return this.http.post('api/email', email, {responseType: 'text'});
  }
}
