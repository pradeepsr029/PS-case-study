import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() cls: string = '';

  constructor() {}

  ngOnInit(): void {}
}
