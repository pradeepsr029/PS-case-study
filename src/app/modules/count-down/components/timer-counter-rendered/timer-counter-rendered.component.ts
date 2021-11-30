import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sap-timer-counter-rendered',
  templateUrl: './timer-counter-rendered.component.html',
  styleUrls: ['./timer-counter-rendered.component.scss'],
})
export class TimerCounterRenderedComponent implements OnInit {
  @Input() count!: number;
  constructor() {}

  ngOnInit(): void {}
}
