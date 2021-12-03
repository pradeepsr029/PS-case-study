import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownRoutingModule } from './count-down-routing.module';
import { CountDownComponent } from './count-down.component';
import { TimerCounterRenderedComponent } from './components/timer-counter-rendered/timer-counter-rendered.component';
import { TimerCounterActionsComponent } from './components/timer-counter-actions/timer-counter-actions.component';
import { TimerCounterLogsComponent } from './components/timer-counter-logs/timer-counter-logs.component';
import { TimerCounterTrackerComponent } from './components/timer-counter-tracker/timer-counter-tracker.component';

@NgModule({
  declarations: [
    CountDownComponent,
    TimerCounterRenderedComponent,
    TimerCounterActionsComponent,
    TimerCounterLogsComponent,
    TimerCounterTrackerComponent,
  ],
  imports: [CommonModule, CountDownRoutingModule],
})
export class CountDownModule {}
