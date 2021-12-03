import { Component, HostListener, OnInit } from '@angular/core';
import { APP_ENUM_TYPE } from './constants/app.constant';
import { IEventResponse } from './interfaces/emitterCallback';
import { detectMobileBrowsers } from './shared/utility/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isHiddenHamburger: boolean = false;
  private isMobileDevice = detectMobileBrowsers(window);

  ngOnInit(): void {
    /**Open in Mobile*/
    if (this.isMobileDevice) {
      this.isHiddenHamburger = true;
    }
  }

  /**
   * @function headerCallbackEvents
   * @param event 
   * @summary Here All Callback event capture from header component
   */
  public headerCallbackEvents(event: IEventResponse) {
    switch (event.type) {
      case APP_ENUM_TYPE.UI_CHANGE:
        this.changeSidebarMenu();
        break;
      default:
        throw new Error(`Unknown Type header event ${event.type}`);
    }
  }

  private changeSidebarMenu() {
    this.isHiddenHamburger = !this.isHiddenHamburger;
  }

  /**Check User Resize Screen*/
  @HostListener('window:resize', ['$event'])
  handleKeyDown(event: any) {
    if (!this.isMobileDevice && event.target.innerWidth <= 640) {
      this.isHiddenHamburger = true;
    } else {
      this.isHiddenHamburger = false;
    }
  }


}
