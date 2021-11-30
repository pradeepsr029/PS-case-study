import { Injectable } from '@angular/core';
import { API_URL, HttpService } from '@httpService';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpService) {}

  public getProductList(query?: any) {
    return this._http.get(API_URL.PRODUCT, query);
  }
}
