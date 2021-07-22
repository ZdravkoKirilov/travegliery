import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRemindersComponent } from './booking-reminders.component';

describe('BookingRemindersComponent', () => {
  let component: BookingRemindersComponent;
  let fixture: ComponentFixture<BookingRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRemindersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
