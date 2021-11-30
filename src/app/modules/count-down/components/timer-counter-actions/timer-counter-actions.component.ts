import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COUNTER_MODULE_ROUTE_TYPE } from 'src/app/constants/app.constant';
import { IEventResponse } from 'src/app/interfaces/emitterCallback';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'sap-timer-counter-actions',
  templateUrl: './timer-counter-actions.component.html',
  styleUrls: ['./timer-counter-actions.component.scss'],
})
export class TimerCounterActionsComponent implements OnInit {
  @Output() timerActionCallback = new EventEmitter<IEventResponse>();
  @Input() routeType!: string;

  constructor(private _countService: CountService) {}

  ngOnInit(): void {}

  public actionEvent(ref: any, type: string) {
    if (!ref.value || ref.value <= 0) {
      return;
    }
    //Emit Event
    if (this.routeType === COUNTER_MODULE_ROUTE_TYPE.DEFAULT) {
      //By Output
      this.timerActionCallback.emit({ type: type, value: ref.value });
    } else {
      //By Subject
      this._countService.triggerEvent({ value: ref.value, type: type });
    }
    //Only Reset condition
    if (type === 'RESET') {
      ref.value = '';
    }
  }
}
