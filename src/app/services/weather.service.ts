import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

    getWeatherData(cityName: string): Observable<WeatherData>{
       let URLWithCity: string  = "";
       URLWithCity = environment.weatherApiBaseUrl + "/city/" + cityName;
       return this.http.get<WeatherData>(URLWithCity, {
        headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue)
      })

    }
}

// export class WeatherService {
//   private apiKey = 'ef701631aemsh2fd53e905723599p1438ffjsn682e7a736e03';
//   private apiUrl = 'weatherbit-v1-mashape.p.rapidapi.com';

//   constructor(private http: HttpClient) { }

//   getWeatherByLocation(location: string): Observable<any> {
//     const url = `${this.apiUrl}?city=${location}&key=${this.apiKey}`;
//     return this.http.get<any>(url);
//   }
// }





// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// // import { environment } from '../environments/environment';
// // import { WeatherData } from '../models/weather.model';

// @Injectable({
//   providedIn: 'root'
// })

// export class WeatherService {
//   private apiKey = 'ef701631aemsh2fd53e905723599p1438ffjsn682e7a736e03';
//   private apiUrl = 'weatherbit-v1-mashape.p.rapidapi.com';

//   constructor(private http: HttpClient) { }

//   getWeatherByLocation(location: string): Observable<any> {
//     const url = `${this.apiUrl}?city=${location}&key=${this.apiKey}`;
//     return this.http.get<any>(url);
//   }
// }


