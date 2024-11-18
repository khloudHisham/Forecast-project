import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_Key = 'deee73e16a744109936185922240505'
  constructor(private http:HttpClient) {}
  getlocation(): Observable<any> {
    return this.http.get('https://api.bigdatacloud.net/data/reverse-geocode-client');
  }
  getData(country:string):Observable<any>{
    return this.http.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.API_Key}&q=${country}&days=5`)
  }
}
