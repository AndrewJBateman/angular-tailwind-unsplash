import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
	withInterceptorsFromDi,
	provideHttpClient,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
	enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
	bootstrapApplication(AppComponent, {
		providers: [
			importProvidersFrom(
				BrowserModule,
				AppRoutingModule,
				ServiceWorkerModule.register('ngsw-worker.js', {
					enabled: environment.production,
				})
			),
			provideAnimations(),
			provideHttpClient(withInterceptorsFromDi()),
		],
	}).catch(err => console.error(err));
});
