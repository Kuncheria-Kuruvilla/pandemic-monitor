import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() primaryDetail: string;
  @Input() secondaryDetail: string;

  ngOnInit(): void {
  }

}
