import { Component, OnInit } from '@angular/core';
import * as data from '../../app/stateAndCity.json'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  lat: number = 51.673858;
  lng: number = 7.815982;
  stateData = data.states
  cities;
  constructor() { }

  ngOnInit(): void {

  }

  onStateChange(e) {
    this.cities = this.stateData.filter((val) => {
      return val.state === e.target.value
    })
    this.cities = this.cities[0].districts
    console.log(this.stateData)
  }

}
