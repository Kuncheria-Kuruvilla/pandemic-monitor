import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GlobalSummaryComponent } from './global-summary/global-summary.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { SearchableCountryListComponent } from './searchable-country-list/searchable-country-list.component';
import { CountrySpecificDashboardComponent } from './country-specific-dashboard/country-specific-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlobalSummaryComponent,
    SummaryCardComponent,
    SearchableCountryListComponent,
    CountrySpecificDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
