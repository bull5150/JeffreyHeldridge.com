import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { blog } from '../models/blog_models';

@Injectable({
  providedIn: 'root'
})
export class BlogapiService {

  constructor(private http: HttpClient) { }

  public getBlogList()
  {
    return this.http.get<blog[]>('api/blog');
  }
}
