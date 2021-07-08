import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryDashboardComponent } from './itinerary-dashboard.component';

describe('ItineraryDashboardComponent', () => {
  let component: ItineraryDashboardComponent;
  let fixture: ComponentFixture<ItineraryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItineraryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
