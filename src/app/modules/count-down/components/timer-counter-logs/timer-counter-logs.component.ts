import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sap-timer-counter-logs',
  templateUrl: './timer-counter-logs.component.html',
  styleUrls: ['./timer-counter-logs.component.scss'],
})
export class TimerCounterLogsComponent implements OnInit {
  @Input() logs: any;
  constructor() {}

  ngOnInit(): void {}
}
