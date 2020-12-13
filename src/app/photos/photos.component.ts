import { Component, OnInit } from '@angular/core';

import { PhotosService } from './../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photoUrl = "";

  constructor(private photoService: PhotosService) {
    this.getPhoto();
  }

  onChangePhoto() {
    this.getPhoto();
  }

  getPhoto() {
    this.photoService.photoQuery().subscribe((data) => {
      this.photoUrl = data;
    });
  }

  ngOnInit(): void {}
}
