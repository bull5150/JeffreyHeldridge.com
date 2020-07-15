import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { chart } from '../models/chart_models';

@Injectable({
  providedIn: 'root'
})
export class ChartapiService {

  constructor(private http: HttpClient) { }

  public getCodingSkills()
  {
    return this.http.get<chart[]>('api/charts/codeskills');
  }
  public getSoftSkills()
  {
    return this.http.get<chart[]>('api/charts/softskills');
  }
}
