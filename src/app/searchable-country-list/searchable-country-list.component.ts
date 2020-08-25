import { Component, OnInit } from '@angular/core';
import { CountryDataService } from "../../services/country-data/country-data.service"
@Component({
  selector: 'searchable-country-list',
  templateUrl: './searchable-country-list.component.html',
  styleUrls: ['./searchable-country-list.component.scss']
})
export class SearchableCountryListComponent implements OnInit {

  constructor(private countryData: CountryDataService) { }

  _countryList = []
  countryFilter = ''

  get countryList() {
    return this.countryFilter
      ? this._countryList.filter(({ Country }) => Country.toLowerCase().includes(this.countryFilter.toLowerCase()))
      : this._countryList
  }

  ngOnInit(): void {
    this.countryData.getCountries().subscribe((countries: any) => this._countryList = countries)
  }

  onKey(event: any) { // without type info
    this.countryFilter = event.target.value;
  }

}
