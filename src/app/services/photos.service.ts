import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, tap } from 'rxjs/operators';

import { Photo } from './photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  baseUrl = 'https://api.unsplash.com';

  constructor(private http: HttpClient) {}

  // random url: ${this.baseUrl}/photos/random
  photoQuery() {
    return this.http
      .get<Photo>(`${this.baseUrl}/photos/random?query=butterflies&orientation=squarish`, {
        headers: {
          Authorization:
            '',
        },
      })
      .pipe(
        tap((data: any) => console.log('photodata: ', data)),
        pluck('urls', 'small')
      );
  }
}
