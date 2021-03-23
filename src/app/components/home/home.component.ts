import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnsplashResponse } from 'src/app/models/unsplash';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  photoData$: Observable<IUnsplashResponse> = new Observable();

  constructor(private photoService: PhotoService) {
    this.getPhoto();
  }

  onChangePhoto() {
    this.getPhoto();
  }

  openLink(url: string): void {
    if (url.length > 0) {
      window.open(url, '_blank');
    } else {
      window.open('https://unsplash.com/', '_blank');
    }
  }

  getPhoto(): void {
    this.photoData$ = this.photoService.photoQuery();
  }
}
