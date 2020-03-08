import { Component } from '@angular/core';

import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'charts';

  constructor(private weather: WeatherService){

  }
  ngOnInit(){
    this.weather.dailyForecast()
      .subscribe(res => {
        console.log(res)
      })
  }
}
