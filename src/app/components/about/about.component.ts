/**
 * Component class for the About page.
 *
 * This component is responsible for rendering the About page in an Angular application.
 * It imports the CommonModule from Angular and sets the encapsulation to ViewEncapsulation.None.
 * The component is standalone and has its own template file.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	standalone: true,
	encapsulation: ViewEncapsulation.None,
})
export class AboutComponent {}
