import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { GithubService } from '../../services/github.service';
import { NgIf, AsyncPipe, SlicePipe, DatePipe } from '@angular/common';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	standalone: true,
	imports: [NgIf, AsyncPipe, SlicePipe, DatePipe],
})
export class ContactComponent implements OnInit {
	user$: Observable<User> = new Observable();

	constructor(private githubService: GithubService) {}

	ngOnInit(): void {
		this.user$ = this.githubService.getUser('andrewjbateman');
	}
}
