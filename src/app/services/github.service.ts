/**
 * This is responsible for making HTTP requests to the GitHub API to retrieve user information.
 * The class has a constructor that takes an instance of the HttpClient class as a parameter.
 * The getUser method is used to retrieve information about a specific user from the GitHub API.
 * It takes a username as a parameter and returns an Observable of type User, which represents the user's information.
 * The method constructs the URL for the API request using the base URL and the provided username.
 * It then makes an HTTP GET request to the constructed URL using the HttpClient instance.
 * The response is piped through the first operator to take only the first emitted value and through
 * the catchError operator to handle any errors that occur during the request.
 * If an error occurs, the method throws the error using the throwError function.
 * The class is decorated with the Injectable decorator, indicating that it can be injected as a
 * dependency in other classes.
 * The providedIn property of the decorator is set to 'root', indicating that a single instance of
 * the class should be created and used throughout the application.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
	providedIn: 'root',
})
export class GithubService {
	constructor(private http: HttpClient) {}

	getUser(user: string): Observable<User> {
		const baseUrl = 'https://api.github.com/users/';
		const userSearchUrl = `${baseUrl}${user}`;
		return this.http.get<User>(userSearchUrl).pipe(
			first(),
			catchError(err => {
				return throwError(() => err);
			})
		);
	}
}
