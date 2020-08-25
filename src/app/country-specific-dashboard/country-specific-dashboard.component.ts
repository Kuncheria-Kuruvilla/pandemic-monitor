import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'country-specific-dashboard',
  templateUrl: './country-specific-dashboard.component.html',
  styleUrls: ['./country-specific-dashboard.component.scss']
})
export class CountrySpecificDashboardComponent implements OnInit {

  constructor() { }

  selectedCountry: any

  setSelectedCountry(selectedCountry){
    this.selectedCountry = selectedCountry
  }
  ngOnInit(): void {
  }

}
