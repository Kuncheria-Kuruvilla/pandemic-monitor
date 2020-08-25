import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySpecificDashboardComponent } from './country-specific-dashboard.component';

describe('CountrySpecificDashboardComponent', () => {
  let component: CountrySpecificDashboardComponent;
  let fixture: ComponentFixture<CountrySpecificDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySpecificDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySpecificDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
