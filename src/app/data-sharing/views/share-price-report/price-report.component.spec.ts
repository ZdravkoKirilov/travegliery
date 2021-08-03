import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePriceReportComponent } from './price-report.component';

describe('SharePriceReportComponent', () => {
  let component: SharePriceReportComponent;
  let fixture: ComponentFixture<SharePriceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharePriceReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePriceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
