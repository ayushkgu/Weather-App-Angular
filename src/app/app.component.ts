import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
// import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){

  }

  cityName: string = '';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = ''; 
  }

  private getWeatherData (cityName: string) {
    this.weatherService.getWeatherData(this.cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response; 
        console.log(response);
      }
    })
  }
 

}



// export class AppComponent implements OnInit {

//   constructor(private weatherService: WeatherService){

//   }

//   weatherData?: WeatherData;

//   ngOnInit(): void {
//       this.weatherService.getWeatherData(this.cityName)
//       .subscribe({
//         next: (response) => {
//           this.weatherData = response; 
//           console.log(response);
//         }
//       })
//   }

//   onSubmit(){
//     this.weatherService.getWeatherData(this.cityName)
//       .subscribe({
//         next: (response) => {
//           this.weatherData = response; 
//           console.log(response);
//         }
//       })
//   }

//   cityName: string = '';

// }