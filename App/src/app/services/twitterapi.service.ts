import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tweets } from '../models/twitter_models';

@Injectable({
  providedIn: 'root'
})
export class TwitterapiService {

  constructor(private http: HttpClient) { }
  public getTweetsbyUser(twitterUser: string, tweetCount: number)
  {
    return this.http.get<tweets[]>('api/twitter/byuser?userName=' + twitterUser + "&tweetCount=" + tweetCount);
  }
  public getTweetsKeyword(keyword: string, tweetCount: number)
  {
    return this.http.get<tweets[]>('api/twitter/byterm?keyword=' + keyword + "&tweetCount=" + tweetCount);
  }
}
