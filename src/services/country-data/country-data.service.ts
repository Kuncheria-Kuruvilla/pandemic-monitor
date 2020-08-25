import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from "../api-constants"

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get(API.Countries)
  }
}
