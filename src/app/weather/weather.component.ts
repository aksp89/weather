import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
public weatherData: any;

  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
location: [""]
    });
  }

    getWeatherInfo(formValues) {
this.weatherService.getWeather(formValues.location)
.subscribe(data=> {
  this.weatherData = data;
});
    }


}
