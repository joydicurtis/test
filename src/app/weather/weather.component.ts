import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  host: {
    'class': 'weather'
  }
})
export class WeatherComponent implements OnInit {
  weatherData: any;

  constructor(private _weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this._weatherDataService.getWeatherData().subscribe(res => {
      this.weatherData = res;
    });
  }

}
