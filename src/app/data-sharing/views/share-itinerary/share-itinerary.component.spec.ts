import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareItineraryComponent } from './share-itinerary.component';

describe('ShareItineraryComponent', () => {
  let component: ShareItineraryComponent;
  let fixture: ComponentFixture<ShareItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareItineraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
