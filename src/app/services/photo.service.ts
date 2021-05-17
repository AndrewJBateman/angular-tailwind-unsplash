import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../environments/environment';

const apiKey = environment.unsplash.UNSPLASH_API_KEY;
const httpOptions: {
  headers: any;
  observe: any;
  params: any;
  responseType: any;
} = {
  headers: new HttpHeaders({
    Authorization: 'Client-ID ' + apiKey,
    'Content-Type': 'application/json',
  }),
  observe: 'response',
  params: 'HttpParams',
  responseType: 'json',
};

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  readonly baseUrl = 'https://api.unsplash.com';

  constructor(private http: HttpClient) {}

  photoQuery(): Observable<any> {
    return this.http
      .get(
        `${this.baseUrl}/photos/random?query=butterflies&orientation=landscape`,
        httpOptions
      )
      .pipe(
        take(1),
        catchError((err) => {
          return throwError(
            'There was a problem fetching user data from Github API, error: ',
            err
          );
        })
      );
  }
}
