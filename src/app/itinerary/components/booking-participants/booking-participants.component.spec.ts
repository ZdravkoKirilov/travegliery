import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingParticipantsComponent } from './booking-participants.component';

describe('BookingParticipantsComponent', () => {
  let component: BookingParticipantsComponent;
  let fixture: ComponentFixture<BookingParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
