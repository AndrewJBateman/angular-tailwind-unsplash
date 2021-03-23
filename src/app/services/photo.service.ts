import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, take, tap } from 'rxjs/operators';

import { IUnsplashResponse } from '../models/unsplash';
import { Observable, throwError } from 'rxjs';

const httpOptions: { headers: any; observe: any; responseType: any } = {
  headers: new HttpHeaders({
    Authorization: '',
    'Content-Type': 'application/json',
  }),
  observe: 'response',
  responseType: 'json',
};

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  readonly baseUrl = 'https://api.unsplash.com';
  private photoData: Observable<IUnsplashResponse> = new Observable();

  constructor(private http: HttpClient) {}

  photoQuery() {
    this.photoData = this.http
      .get(
        `${this.baseUrl}/photos/random?query=butterflies&orientation=landscape`,
        httpOptions
      )
      .pipe(
        tap((data: any) => console.log('photodata: ', data)),
        take(1),
        catchError((err) => {
          return throwError(
            'There was a problem fetching user data from Github API, error: ',
            err
          );
        })
      ) as Observable<IUnsplashResponse>;
    return this.photoData;
  }
}
