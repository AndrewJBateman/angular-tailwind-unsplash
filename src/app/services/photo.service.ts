/**
 * PhotoService class responsible for handling photo queries from the Unsplash API.
 *
 * @class
 * @public
 * @constructor
 * @property {HttpClient} http - The HttpClient instance used for making HTTP requests.
 * @property {string} baseUrl - The base URL of the Unsplash API.
 * @property {object} httpOptions - The HTTP options used for making requests, including headers, params, and responseType.
 * @method photoQuery - Method for querying photos from the Unsplash API based on a query and orientation.
 * @param {object} options - The options object containing the query and orientation parameters.
 * @returns {Observable<any>} - An Observable that emits the response from the API request.
 * @throws {string} - Throws an error message if there was a problem fetching data from the Unsplash API.
 */
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import { Observable, throwError, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class PhotoService {
	private http = inject(HttpClient);
	readonly baseUrl = environment.unsplash.UNSPLASH_URL;

	private httpOptions: {
		headers: HttpHeaders;
		observe: 'response';
		params: HttpParams;
		responseType: 'json';
	} = {
		headers: new HttpHeaders({
			Authorization: 'Client-ID ' + environment.unsplash.UNSPLASH_API_KEY,
			'Content-Type': 'application/json',
		}),
		observe: 'response',
		params: new HttpParams(),
		responseType: 'json',
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	photoQuery(options: { query: string; orientation: string }): Observable<any> {
		const queryParams = new HttpParams()
			.set('query', options.query)
			.set('orientation', options.orientation);

		return this.http
			.get(`${this.baseUrl}/photos/random`, {
				...this.httpOptions,
				params: queryParams,
			})
			.pipe(
				take(1),
				tap(data => console.log(data)),
				catchError(err => {
					return throwError(
						() =>
							`There was a problem fetching data from the Unsplash API: ${err.error.errors.toString()}`
					);
				})
			);
	}
}
