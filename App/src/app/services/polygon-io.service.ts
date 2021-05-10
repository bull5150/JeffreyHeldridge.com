import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { info, news, close, financials } from '../models/polygon_models';

@Injectable({
  providedIn: 'root'
})
export class PolygonIOService {

  constructor(private http: HttpClient) { }

  public getTickerInfo(symbol: string)
  {
    return this.http.get<info[]>('api/polygon/tickerinfo?symbol=' + symbol);
  }
  public getTickerNews(symbol: string)
  {
    return this.http.get<news[]>('api/polygon/tickernews?symbol=' + symbol);
  }
  public getTickerClose(symbol: string)
  {
    return this.http.get<close[]>('api/polygon/tickerclose?symbol=' + symbol);
  }
  public getTickerFinancials(symbol: string)
  {
    return this.http.get<financials[]>('api/polygon/tickerfinancials?symbol=' + symbol);
  }
}
