import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {

  city: FormControl = new FormControl('');
  cityName: string;
  selectedCity: data;

  @Input() weatherData: data[];

  ngOnInit() {
    this.city.valueChanges.subscribe(value => {
      this.cityName = value;
      this.selectedCity = this.weatherData.find(t => t.name.toLowerCase() === value.toLowerCase());
    });
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}