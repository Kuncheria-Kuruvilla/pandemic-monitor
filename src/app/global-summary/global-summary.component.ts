import { Component, OnInit } from '@angular/core';
import { GlobalSummaryService } from '../../services/GlobalSummary/global-summary.service'
@Component({
  selector: 'app-global-summary',
  templateUrl: './global-summary.component.html',
  styleUrls: ['./global-summary.component.scss']
})
export class GlobalSummaryComponent implements OnInit {

  constructor(private summary: GlobalSummaryService) { }

  totalCases: number
  newCases: number
  totalDeaths: number
  newDeaths: number
  totalRecoverd: number
  newRecovered: number
  totalActive: number
  newActive: number

  ngOnInit(): void {
    this.summary.getSummary().subscribe(({ Global }: any) => {
      this.totalCases = Global.TotalConfirmed
      this.newCases = Global.NewConfirmed
      this.totalRecoverd = Global.TotalRecovered
      this.newRecovered = Global.NewRecovered
      this.totalDeaths = Global.TotalDeaths
      this.newDeaths = Global.NewDeaths
      this.totalActive = Global.TotalConfirmed - (Global.TotalRecovered + Global.TotalDeaths)
      this.newActive = Global.NewConfirmed - (Global.NewRecovered + Global.NewDeaths)
    })
  }

  percentageIncrease(total,delta){
    return ((delta / (total-delta)) * 100).toFixed(2);
  }
}
