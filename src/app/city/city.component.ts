import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  lat: number = 51.673858;
  lng: number = 7.815982;
  constructor() { }

  ngOnInit(): void {
  }

}
