import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCounterActionsComponent } from './timer-counter-actions.component';

describe('TimerCounterActionsComponent', () => {
  let component: TimerCounterActionsComponent;
  let fixture: ComponentFixture<TimerCounterActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCounterActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCounterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
