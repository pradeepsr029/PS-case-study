import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shadow-img',
  templateUrl: './shadow-img.component.html',
  styleUrls: ['./shadow-img.component.scss'],
})
export class ShadowImgComponent implements OnInit {
  @Input() img!: string;

  constructor() {}

  ngOnInit(): void {}
}
