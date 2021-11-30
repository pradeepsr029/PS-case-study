import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sap-timer-counter-tracker',
  templateUrl: './timer-counter-tracker.component.html',
  styleUrls: ['./timer-counter-tracker.component.scss'],
})
export class TimerCounterTrackerComponent implements OnInit {
  @Input() logs: any;
  constructor() {}

  ngOnInit(): void {}
}
