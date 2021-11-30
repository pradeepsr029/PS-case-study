import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCounterTrackerComponent } from './timer-counter-tracker.component';

describe('TimerCounterTrackerComponent', () => {
  let component: TimerCounterTrackerComponent;
  let fixture: ComponentFixture<TimerCounterTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCounterTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCounterTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
