import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableCountryListComponent } from './searchable-country-list.component';

describe('SearchableCountryListComponent', () => {
  let component: SearchableCountryListComponent;
  let fixture: ComponentFixture<SearchableCountryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableCountryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
