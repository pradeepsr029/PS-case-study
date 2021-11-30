import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCounterLogsComponent } from './timer-counter-logs.component';

describe('TimerCounterLogsComponent', () => {
  let component: TimerCounterLogsComponent;
  let fixture: ComponentFixture<TimerCounterLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCounterLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCounterLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
