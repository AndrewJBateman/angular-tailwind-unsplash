import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			title: 'Home',
			description: 'Welcome to the home page',
		},
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./components/about/about.component').then(m => m.AboutComponent),
		data: {
			title: 'About',
			description: 'Learn more about us',
		},
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./components/contact/contact.component').then(
				m => m.ContactComponent
			),
		data: {
			title: 'Contact',
			description: 'Get in touch with us',
		},
	},
	{
		path: '**',
		loadComponent: () =>
			import('./components/not-found/not-found.component').then(
				m => m.NotFoundComponent
			),
		data: {
			title: 'Not Found',
			description: 'Page not found',
		},
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
