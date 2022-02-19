import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { mapmarker } from '../models/googlemap_models';

@Injectable({
  providedIn: 'root'
})
export class GooglemarkerapiService {

  constructor(private http: HttpClient) { }
  public getMapMarkers()
  {
    return this.http.get<mapmarker[]>('api/google/markers');
  }
}
