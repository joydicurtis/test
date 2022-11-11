import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private _httpClient: HttpClient) { }

  getWeatherData() {
    return this._httpClient.get('https://api.openweathermap.org/data/2.5/weather?lat=52.37&lon=4.90&units=metric&appid=8bea84f95cee5d16b9c765249df5e430');
  }
 }
