import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
apiKey = "081383be5359030143d3c179dba4b32f";

  constructor(private http: HttpClient) { }

  getWeather(location) {
return this.http.get(
  `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${location}`);
  }
}
