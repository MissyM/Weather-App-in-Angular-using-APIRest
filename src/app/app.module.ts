import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherChartComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
