/**
 * ContactComponent class represents a component in Angular application.
 * It implements the OnInit interface to handle initialization logic.
 * The component is responsible for fetching user data from the GithubService
 * and displaying it in the contact component template.
 *
 * Properties:
 * - githubService: An instance of the GithubService class.
 * - user$: An Observable of type User that holds the user data.
 *
 * Methods:
 * - ngOnInit(): A lifecycle hook method that is called after the component is initialized.
 *   It fetches the user data from the GithubService using the getUser method and assigns it to the user$ property.
 */
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { GithubService } from '../../services/github.service';
import { AsyncPipe, SlicePipe, DatePipe } from '@angular/common';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	standalone: true,
	imports: [AsyncPipe, SlicePipe, DatePipe],
})
export class ContactComponent implements OnInit {
	private githubService = inject(GithubService);
	user$!: Observable<User>;

	ngOnInit(): void {
		this.user$ = this.githubService.getUser('andrewjbateman');
	}
}
