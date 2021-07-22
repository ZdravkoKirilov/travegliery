import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBookingComponent } from './share-booking.component';

describe('ShareBookingComponent', () => {
  let component: ShareBookingComponent;
  let fixture: ComponentFixture<ShareBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
