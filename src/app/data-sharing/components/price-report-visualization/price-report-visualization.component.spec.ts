import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceReportVisualizationComponent } from './price-report-visualization.component';

describe('PriceReportVisualizationComponent', () => {
  let component: PriceReportVisualizationComponent;
  let fixture: ComponentFixture<PriceReportVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceReportVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceReportVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
