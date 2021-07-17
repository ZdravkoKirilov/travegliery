import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantContactComponent } from './participant-contact.component';

describe('ParticipantContactComponent', () => {
  let component: ParticipantContactComponent;
  let fixture: ComponentFixture<ParticipantContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
