/**
 * Represents a TypeScript class named NotFoundComponent.
 * This class is an Angular component that is used to handle the "not found" page.
 * It is decorated with the @Component decorator, which provides metadata for the component.
 * The component has a selector of 'app-not-found' and a template URL of './not-found.component.html'.
 * The standalone property is set to true, indicating that this component can be used independently.
 */
import { Component } from '@angular/core';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	standalone: true,
})
export class NotFoundComponent {}
