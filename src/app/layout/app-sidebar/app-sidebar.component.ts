import { Component, OnInit } from '@angular/core';
import { SIDE_MENU_LIST } from 'src/app/constants/app.constant';

@Component({
  selector: 'sap-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  public sideMenu=SIDE_MENU_LIST;
  
  constructor() { }

  ngOnInit(): void {
  }

}
