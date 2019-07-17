import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { forkJoin } from 'rxjs';
import { Temperature } from './weather-chart/weather-chart.component';

const citiesID = [
  3688689, // Bogota
  3846616, // London
  5128581, // New York
  4930956, // Boston
  5368361, // Los Angeles
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  citiesCurrent = [];
  citiesForecast = [];

  selectedCity;
  weatherIcon;
  selectedCityTempForecast: Temperature[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

    forkJoin(citiesID.map(id => this.weatherService.getCurrentByCityID(id))).subscribe(results => {
      this.citiesCurrent = results;
    });
  }

  handleCitySelected(city) {
    this.selectedCity = city;
    this.weatherIcon = `https://openweathermap.org/img/wn/${this.selectedCity.weather[0].icon}@2x.png`;
    this.weatherService.getForecastByID(city.id).subscribe(res => {
      this.selectedCityTempForecast = res.list.map(item => ({ value: item.temp.day, time: item.dt }));
    });
  }
}
