import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  photoData$: any;
  public photoUrl = '';
  public photoDescription = '';
  public photoUnsplashLink = '';
  public photoAltDescription = '';
  public photoLocation = '';
  public photoAuthor = '';
  public photoViews = 0;

  constructor(private photoService: PhotoService) {
    this.getPhoto();
  }

  onChangePhoto() {
    this.getPhoto();
  }

  openLink(): void {
    if(this.photoUrl.length > 0) {
      window.open(this.photoUrl, '_blank');
    } else {
      window.open('https://unsplash.com/', '_blank');
    }
  }

  getPhoto() {
    this.photoData$ = this.photoService.photoQuery().subscribe((data: any) => {
      this.photoUrl = data.body.urls.small;
      this.photoDescription = data.body.description;
      this.photoUnsplashLink = data.body.links.html;
      this.photoAltDescription = data.body.alt_description;
      this.photoLocation = data.body.location.title;
      this.photoAuthor =
        data.body.user.first_name + ' ' + data.body.user.last_name;
      this.photoViews = data.body.views;
      console.log(
        'photo data: ',
        this.photoUrl,
        this.photoDescription,
        this.photoUnsplashLink,
        this.photoAltDescription,
        this.photoLocation,
        this.photoAuthor
      );
    });
  }

  ngOnInit(): void {}
}
