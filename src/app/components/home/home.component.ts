/**
 * HomeComponent class represents the home component in an Angular application.
 * It is responsible for displaying a random photo fetched from the Unsplash API.
 * The component has a method to open a provided URL in a new tab and a method to
 * retrieve the photo data from the photo service.
 * The photo data is stored in the photoData$ property as an Observable of type
 * IUnsplashResponse.
 */
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnsplashResponse } from 'src/app/models/unsplash';
import { PhotoService } from '../../services/photo.service';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [AsyncPipe],
})
export class HomeComponent {
	private photoService = inject(PhotoService);
	photoData$!: Observable<IUnsplashResponse>;

	constructor() {
		this.getPhoto();
	}

	/**
	 * Opens the provided URL in a new tab.
	 * If the URL is empty, opens the default Unsplash URL.
	 * @param url The URL to open in a new tab.
	 */
	openLink(url: string): void {
		if (url.length > 0) {
			const encodedUrl = encodeURIComponent(url);
			window.open(encodedUrl, '_blank');
		} else {
			window.open('https://unsplash.com/', '_blank');
		}
	}

	/**
	 * Retrieves the photo data from the photo service.
	 */
	getPhoto(): void {
		const options = { query: 'butterflies', orientation: 'landscape' };
		this.photoData$ = this.photoService.photoQuery(options);
	}
}
