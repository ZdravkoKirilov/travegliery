import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingVisualizationComponent } from './booking-visualization.component';

describe('BookingVisualizationComponent', () => {
  let component: BookingVisualizationComponent;
  let fixture: ComponentFixture<BookingVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
