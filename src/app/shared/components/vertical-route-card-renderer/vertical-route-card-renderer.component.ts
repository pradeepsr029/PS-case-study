import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sap-vertical-route-card-renderer',
  templateUrl: './vertical-route-card-renderer.component.html',
  styleUrls: ['./vertical-route-card-renderer.component.scss']
})
export class VerticalRouteCardRendererComponent implements OnInit {
  @Input() card: any;
  @ViewChild('verticalRef', { static: true }) verticalRef!: ElementRef;
  private readonly colors = ['#70929c,#846170', '#846170,#70929c', '#e6846e,#70929c', '#8e8485,#70929c', '#846170,#e6846e', '#70929c,#e6846e', '#70929c,#8e8485', '#8e8485,#e6846e', '#e6846e,#846170']

  constructor() { }

  ngOnInit(): void {
    this.setRandomColor();
  }

  private setRandomColor() {
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.verticalRef.nativeElement.style.backgroundImage = `linear-gradient(135deg,${color})`;
  }

}
