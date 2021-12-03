import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MetaService, META_DATA } from '@meta';
import { SIDE_MENU_LIST, HOME_BANNER } from 'src/app/constants/app.constant';
import { debounce } from 'src/app/shared/utility/helper';

@Component({
  selector: 'sap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('horizTranslate', { static: true }) horizTranslate!: ElementRef;
  public banners = HOME_BANNER;
  private mainViewBannerIndex = 0;
  private readonly totalNumberOfBanner = HOME_BANNER.length;
  private isNextBanner = true;
  public homeRoutes = SIDE_MENU_LIST;
  private interval: any;

  constructor(
    private _metaService: MetaService
  ) { }

  ngOnInit(): void {
    this.translateBanner();
    /**Update Meta*/
    this._metaService.setTags(META_DATA.HOME);
  }

  /**
   * @function 
   * @summary Auto Slide 
   */
  private translateBanner() {
    this.interval = setInterval(() => {
      //Slide Right Side
      if (this.mainViewBannerIndex == 1) {
        this.isNextBanner = true;
      }
      //Slide Left Side
      if (this.mainViewBannerIndex == this.totalNumberOfBanner - 2) {
        this.isNextBanner = false;
      }
      //Increase/Decrease current banner index
      this.isNextBanner ? ++this.mainViewBannerIndex : --this.mainViewBannerIndex;
      this.translateSlider();
    }, 2500);
  }

  //**Change Slider*/
  private translateSlider() {
    const translate = (this.mainViewBannerIndex * 900);
    this.horizTranslate.nativeElement.style.cssText = `transform: translate3d(${-translate}px,0,0);left: unset`
  }

  /**
   * @function nextPreSlider
   * @param isNext 
   * @summary Next/Pre Slider Buttons Event
   */
  public nextPreSlider(isNext: boolean) {
    if (isNext && this.mainViewBannerIndex < this.totalNumberOfBanner - 2) {
      /**Stop Auto slider*/
      this.clearTimer();
      ++this.mainViewBannerIndex;
      this.translateSlider();
    }
    if (!isNext && this.mainViewBannerIndex > 1) {
      /**Stop Auto slider*/
      this.clearTimer();
      --this.mainViewBannerIndex;
      this.translateSlider();
    }

    /**Again Auto Slider start*/
    if (this.interval == null) {
      const againStartInterval = debounce(this.translateBanner.bind(this), 2500)
      againStartInterval();
    }
  }

  /**Clear Interval*/
  private clearTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

}
