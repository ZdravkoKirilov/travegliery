import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantItineraryComponent } from './participant-itinerary.component';

describe('ParticipantItineraryComponent', () => {
  let component: ParticipantItineraryComponent;
  let fixture: ComponentFixture<ParticipantItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantItineraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
