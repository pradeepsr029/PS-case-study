import { Injectable } from '@angular/core';
import { API_URL, HttpService } from '@httpService';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private _http: HttpService) {}

  public getUserListing() {
    return this._http.get(API_URL.USERS);
  }
}
