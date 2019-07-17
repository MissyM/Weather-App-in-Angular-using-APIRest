import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentByCityID(id: number): Observable<any> {
    return this.http
    .get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }
  getForecastByID(id: number): Observable<any> {
    return this.http
    .get(`https://api.openweathermap.org/data/2.5/forecast/daily?id=${id}&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }

}
