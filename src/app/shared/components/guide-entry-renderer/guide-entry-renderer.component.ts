import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'guide-entry-renderer',
  templateUrl: './guide-entry-renderer.component.html',
  styleUrls: ['./guide-entry-renderer.component.scss']
})
export class GuideEntryRendererComponent implements OnInit {
  @Input() list: any;

  constructor() { }

  ngOnInit(): void {
  }

}
