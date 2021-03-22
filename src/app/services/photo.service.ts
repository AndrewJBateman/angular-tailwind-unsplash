import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, share, take, tap } from 'rxjs/operators';

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
  private photoData: any = null;

  constructor(private http: HttpClient) {}

  // random url: ${this.baseUrl}/photos/random
  photoQuery() {
    if (this.photoData !== null) {
      console.log('using share to not make another http call');
      console.log("photo data: ", this.photoData);
      return this.photoData;
    } else {
      console.log('new http call underway');
      this.photoData = this.http
        .get(
          `${this.baseUrl}/photos/random?query=butterflies&orientation=landscape`,
          httpOptions
        )
        .pipe(
          tap((data: any) => console.log('photodata: ', data)),
          take(1),
          share(),
          catchError((err) => {
            return throwError(err);
          })
        ) as Observable<IUnsplashResponse>;
      return this.photoData;
    }
  }
}
