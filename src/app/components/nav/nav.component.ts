import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
})
export class NavComponent {
	name = environment.application.name;
}
