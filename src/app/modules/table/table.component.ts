import { Component, OnDestroy, OnInit } from '@angular/core';
import { first, Subscription } from 'rxjs';
import { SORT_ORDER_TYPE } from 'src/app/constants/app.constant';
import { IEventResponse } from 'src/app/interfaces/emitterCallback';
import { TableService } from './services/table.service';

@Component({
  selector: 'sap-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  private _ApiSubscription!: Subscription;
  public users: any;
  public isApiCallInProgress: boolean = false;
  public sortingName = SORT_NAME;

  constructor(private _tableService: TableService) { }

  ngOnInit(): void {
    this.getUserListing();
  }

  /**
   * @function getUserListing
   * @summary Get user listing
   */
  private getUserListing() {
    this.isApiCallInProgress = true;
    this._ApiSubscription = this._tableService.getUserListing().pipe(first()).subscribe((response) => {
      this.users = response;
      this.isApiCallInProgress = false;
    },(error) => {
        this.isApiCallInProgress = false;
        //Error
      }
    );
  }

  /**
   * @function sorting
   * @param event
   * @param type {Sort name}
   * @summary base on @name type apply sorting
   */
  public sorting(event: IEventResponse, type: string) {
    let key = '';
    let order: number = event.value == SORT_ORDER_TYPE.DES ? -1 : 1;
    switch (type) {
      //Sort By name
      case SORT_NAME.NAME:
        key = 'name.firstname';
        break;
      //Sort By username
      case SORT_NAME.USERNAME:
        key = 'username';
        break;
      //Sort By email
      case SORT_NAME.EMAIL:
        key = 'email';
        break;
      default:
        throw new Error(`Unknown Type of sorting name ${type}`);
    }
    //For Reset Sorting
    if (event.value === SORT_ORDER_TYPE.DEF) {
      key = 'id';
    }
    //Apply Sorting
    this.users = this.users.sort((value: any, nextvalue: any) => {
      if (order == -1) {
        return value[key] < nextvalue[key] ? 1 : -1;
      } else {
        return value[key] > nextvalue[key] ? 1 : -1;
      }
    });
    //
  }

  /** Call this function to clean up the established subscriptions */
  private deConstructor() {
    if (this._ApiSubscription) {
      this._ApiSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.deConstructor();
  }
}

enum SORT_NAME {
  NAME = 'NAME',
  USERNAME = 'USERNAME',
  EMAIL = 'EMAIL',
}
