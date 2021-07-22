import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDashboardComponent } from './sharing-dashboard.component';

describe('SharingDashboardComponent', () => {
  let component: SharingDashboardComponent;
  let fixture: ComponentFixture<SharingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
