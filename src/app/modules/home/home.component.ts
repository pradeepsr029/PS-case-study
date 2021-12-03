import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SIDE_MENU_LIST, HOME_BANNER } from 'src/app/constants/app.constant';

@Component({
  selector: 'sap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('horizTranslate', { static: true }) horizTranslate!: ElementRef;
  public banners=HOME_BANNER;
  private mainViewBannerIndex = -1;
  private totalNumberOfBanner=HOME_BANNER.length;
  public homeRoutes=SIDE_MENU_LIST;

  constructor() { }

  ngOnInit(): void {
    this.translateBanner()
  }

  private translateBanner() {
    setInterval(() => {
      if(this.mainViewBannerIndex===this.totalNumberOfBanner){
        --this.mainViewBannerIndex;
      }else{
        ++this.mainViewBannerIndex;
      }
      this.horizTranslate.nativeElement.style.cssText=`transform: translate3d(calc(${this.mainViewBannerIndex} * 900px),0,0);left: unset`
    }, 2000);
  }

}
