import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingGeneralComponent } from './booking-general.component';

describe('BookingGeneralComponent', () => {
  let component: BookingGeneralComponent;
  let fixture: ComponentFixture<BookingGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
