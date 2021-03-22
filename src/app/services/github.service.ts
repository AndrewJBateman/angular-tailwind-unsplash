import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, share, take } from 'rxjs/operators';

import { User } from '../models/user';

const baseUrl = 'https://api.github.com/users/';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private userData: any;

  constructor(private http: HttpClient) {}

  getUser(user: string): Observable<User> {
    const userSearchUrl = `${baseUrl + user}`;
    if (this.userData) {
      return this.userData;
    } else {
      this.userData = this.http.get<User>(userSearchUrl).pipe(
        take(1),
        share(),
        catchError((err) => {
          return throwError(
            'There was a problem fetching user data from Github API, error: ',
            err
          );
        })
      );
      return this.userData;
    }
  }
}
