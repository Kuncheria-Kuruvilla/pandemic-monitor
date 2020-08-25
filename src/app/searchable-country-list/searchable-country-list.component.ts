import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryDataService } from "../../services/country-data/country-data.service"

@Component({
  selector: 'searchable-country-list',
  templateUrl: './searchable-country-list.component.html',
  styleUrls: ['./searchable-country-list.component.scss']
})
export class SearchableCountryListComponent implements OnInit {

  constructor(private countryData: CountryDataService) { }
  @Output() countrySelectEvent = new EventEmitter<Object>();

  private _countryList = []
  countryFilter = ''

  get filteredCountryList() {
    return this.countryFilter
      ? this._countryList.filter(({ Country }) => Country.toLowerCase().includes(this.countryFilter.toLowerCase()))
      : this._countryList
  }

  ngOnInit(): void {
    this.countryData.getCountries().subscribe((countries: any) => {
      this._countryList = countries
      this.countrySelectEvent.emit(countries[0])
    })
  }

  onKey(event: any) {
    this.countryFilter = event.target.value;
  }

  onCountrySelect(countrySlug) {
    var selectedCountry = this._countryList.find(country => country.Slug === countrySlug)
    this.countrySelectEvent.emit(selectedCountry)
  }
}
