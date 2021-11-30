import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCounterRenderedComponent } from './timer-counter-rendered.component';

describe('TimerCounterRenderedComponent', () => {
  let component: TimerCounterRenderedComponent;
  let fixture: ComponentFixture<TimerCounterRenderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCounterRenderedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCounterRenderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
