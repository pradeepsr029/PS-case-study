import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sap-create-dynamically-div',
  templateUrl: './create-dynamically-div.component.html',
  styleUrls: ['./create-dynamically-div.component.scss'],
})
export class CreateDynamicallyDivComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('innerAppend', { static: true }) innerAppend!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.createDynamicallyDiv(30);
  }

  ngAfterViewInit() {
    this.innerAppend.nativeElement.addEventListener('click',this.listeningGlobalClick);
    //Scroll Event
    window.addEventListener('scroll', this.listeningWindowScroll);
  }

  /**
   * @function createDynamicallyDiv
   * @param count {Create Number of elements}
   * @summary createDynamicallyDiv is a common function create dynamically element base on requirement
   */
  private createDynamicallyDiv(count: number = 1) {
    const documentFragment = document.createDocumentFragment();
    let lastCreateElement = this.getLastAppendChildrenId;
    for (let index = 0; index < count; index++) {
      // const element = array[index];
      const creatDiv = document.createElement('div');
      creatDiv.innerHTML = `<button type="button">Index ${lastCreateElement} Click</button>`;
      creatDiv.setAttribute('track-id', lastCreateElement);
      creatDiv.style.cssText = `height:200px;width:200px;background-color:red;border-radius:4px;display: flex;align-items: center;justify-content: center;float:left;margin-left: 15px;margin-bottom: 15px;`;
      ++lastCreateElement;
      documentFragment.appendChild(creatDiv);
    }
    //append One time multiple element
    this.innerAppend.nativeElement.appendChild(documentFragment);
  }

  /**
   * @returns {LastElement Id}
   */
  private get getLastAppendChildrenId() {
    const lastElement = this.innerAppend.nativeElement.lastChild;
    //Else
    if (!lastElement) {return 0;}
    //Default
    return this.innerAppend.nativeElement.lastChild.getAttribute('track-id');
  }

  /**
   * @function listeningGlobalClick
   * @param event {Target}
   * @summary Listening Click and perform action as per user target
   */
  public listeningGlobalClick(event: any) {
    const closestTrackIdElement = event.target.closest('[track-id]');
    //Element Not found
    if (!closestTrackIdElement || event.target.nodeName !== 'BUTTON') {
      return;
    }
    const getTrackId = closestTrackIdElement.getAttribute('track-id');
    alert(`Button ${getTrackId} is clicked.`);
  }

  //Window Scroll Event
  private listeningWindowScroll = () => {
    const scrollPer = window.scrollY + window.innerHeight;
    if (scrollPer >= document.documentElement.scrollHeight) {
      //Load More
      this.createDynamicallyDiv(20);
    }
  };

  /**
   * @summary Remove All Listener
   */
  private removeAllListener() {
    /**Element Click*/
    this.innerAppend.nativeElement.removeEventListener('click', this.listeningGlobalClick);
    /**Window Scroll */
    window.removeEventListener('scroll', this.listeningWindowScroll);
  }

  ngOnDestroy(): void {
    this.removeAllListener();
  }
}
