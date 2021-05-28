import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { chart } from '../models/chart_models';

@Injectable({
  providedIn: 'root'
})
export class ChartapiService {

  constructor(private http: HttpClient) { }

  public getSkills()
  {
    return this.http.get<chart[]>('api/charts/skills');
  }
  public getRaceChart()
  {
    return this.http.get<object>('api/charts/race');
  }
}
