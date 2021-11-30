import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environment';
import { Response } from 'src/app/interfaces/common';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  //API Base Path
  readonly API_BASE_PATH: string = environment.BASE_PATH;

  constructor(private http: HttpClient) {}

  get(url: string, params?: any): Observable<Response> {
    const reqUrl = this.API_BASE_PATH + url;
    return this.http
      .get<Response>(reqUrl, { params: params })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  post(url: string, body: any): Observable<Response> {
    const reqUrl = this.API_BASE_PATH + url;
    return this.http
      .post<Response>(reqUrl, body)
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  patch(url: string, body?: any): Observable<Response> {
    const reqUrl = this.API_BASE_PATH + url;
    return this.http
      .patch<Response>(reqUrl, body)
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  put(url: string, body?: any): Observable<Response> {
    const reqUrl = this.API_BASE_PATH + url;
    return this.http
      .put<Response>(reqUrl, body)
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  delete(url: string, query?: any): Observable<Response> {
    const reqUrl = this.API_BASE_PATH + url;
    return this.http
      .delete<Response>(reqUrl, { params: query })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  // ------------------------------------------------------//
  private handleError(err: HttpErrorResponse) {
    return throwError(err.error ? err.error : err);
  }
}
