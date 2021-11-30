import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private counterSubject = new Subject<{ type: string; value: string }>();

  constructor() {}

  public triggerEvent(data: { type: string; value: any }) {
    this.counterSubject.next(data);
  }

  public get getCounterEvent() {
    return this.counterSubject;
  }
}
