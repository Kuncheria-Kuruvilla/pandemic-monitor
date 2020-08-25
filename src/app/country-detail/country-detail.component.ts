import { Component, OnInit, Input } from '@angular/core';
import { GlobalSummaryService } from '../../services/GlobalSummary/global-summary.service'
import {UtilsService} from "../../services/utils/utils.service"
import { CountryDataService } from "../../services/country-data/country-data.service"
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  constructor(private summary: GlobalSummaryService, private utils: UtilsService,private countryData: CountryDataService) { }

  private _countrySlug: any
  @Input() 
  set countrySlug(slug){
    this._countrySlug = slug
    this.summary.getSummary().subscribe(({Countries}: any) => {
      var summary = Countries.find(country => country.Slug === this._countrySlug)
      this.countrySummary = summary
      if(summary){
        this.countrySummary.totalActive = summary.TotalConfirmed - (summary.TotalRecovered + summary.TotalDeaths)
        this.countrySummary.newActive = summary.NewConfirmed - (summary.NewRecovered + summary.NewDeaths)
      }
    })
    this.countryData.getCountryDayOneAllStatus(this._countrySlug).subscribe((data :any) =>{

      //To Do Charts
    })
  }
  get countrySlug(){
    return this._countrySlug
  }

  countrySummary : any

  ngOnInit(): void {
  }

  percentageIncrease(total,delta){
    return this.utils.percentageIncrease(total,delta);
  }

}
