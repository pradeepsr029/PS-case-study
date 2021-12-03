import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APP_ENUM_TYPE } from 'src/app/constants/app.constant';
import { IEventResponse } from 'src/app/interfaces/emitterCallback';

@Component({
  selector: 'sap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() headerCallback = new EventEmitter<IEventResponse>();
  @Input() cls: string = '';

  constructor() { }

  ngOnInit(): void { }

  public changeHamburgerOption() {
    this.headerCallback.emit({ type: APP_ENUM_TYPE.UI_CHANGE });
  }
}
