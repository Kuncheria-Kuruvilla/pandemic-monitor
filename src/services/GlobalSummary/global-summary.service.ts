import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from "../api-constants"

@Injectable({
  providedIn: 'root'
})
export class GlobalSummaryService {

  constructor(private http: HttpClient) {
   }

   getSummary(){
     return this.http.get(API.Summary)
   }
}
