import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaService, META_DATA } from '@meta';
import { Subscription } from 'rxjs';
import { COUNTER_MODULE_ROUTE_TYPE } from 'src/app/constants/app.constant';
import { CountService } from './services/count.service';

@Component({
  selector: 'sap-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  private _Subscription: Subscription[] = [];
  public countDownTiming: number = 0;
  public timerLogs: any = [];
  public timerTracker = {
    started: 0,
    paused: 0,
  };
  public countDownInfo = {
    start: 0,
    end: 0,
  };
  private timer: any;
  public routeType = COUNTER_MODULE_ROUTE_TYPE.DEFAULT; //Default
  public counterRouteType = COUNTER_MODULE_ROUTE_TYPE;

  constructor(
    private _router: Router,
    private _countService: CountService,
    private _metaService: MetaService
  ) { }

  ngOnInit(): void {
    if (this._router.url.indexOf('/subject') != -1) {
      this.routeType = COUNTER_MODULE_ROUTE_TYPE.SUBJECT;
      //Listener
      this.moduleObservableListener();
    }
    /**Update Meta*/
    this._metaService.setTags(META_DATA.COUNT_DOWN_TIMER);
  }

  /**
   * @function moduleObservableListener
   * @summary Listener Trigger Event (Rxjs Subject)
   */
  private moduleObservableListener() {
    this._Subscription.push(
      this._countService.getCounterEvent.subscribe((result) => {
        this.counterChildrenEvents(result);
      })
    );
  }

  /**
   * @function startPauseTimer
   * @param endTime
   * @summary Start timer common function
   */
  public startPauseTimer(endTime: number) {
    this.countDownTiming = endTime;
    ++this.timerTracker.started;
    this.timerLogs.push({ time: new Date(), type: 'STARTED' });
    this.timer = setInterval(() => {
      --this.countDownTiming;
      if (this.countDownTiming == this.countDownInfo.end) {
        this.clearTimeInterval();
      }
    }, 1000);
  }

  /**
   * @function clearTimeInterval
   * @summary Clear Intervale and store data logs
   */
  private clearTimeInterval() {
    clearInterval(this.timer);
    this.timer = null;
    ++this.timerTracker.paused;
    this.timerLogs.push({ time: new Date(), type: 'PAUSED' });
  }

  /******Reset Timer*******/
  private reset() {
    if (!this.timer) { return; }
    this.countDownTiming = 0;
    this.clearTimeInterval();
  }

  /**
   * @function counterChildrenEvents
   * @param event {value, type}
   * @summary Call children components event here
   */
  public counterChildrenEvents(event: any) {
    switch (event.type) {
      case 'START':
        this.startPauseTimer(event.value);
        break;
      case 'RESET':
        this.reset();
        break;
      default:
        throw new Error(`Unknown Type find ${event.type}`);
    }
  }

  /** Call this function to clean up the established subscriptions */
  private deConstructor() {
    this._Subscription.forEach((subscription) => {
      subscription.unsubscribe();
    });
    this._Subscription = [];
  }

  ngOnDestroy() {
    this.deConstructor();
  }
}
