import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./components/about/about.component').then(m => m.AboutComponent),
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./components/contact/contact.component').then(
				m => m.ContactComponent
			),
	},
	{ path: '**', component: NotFoundComponent },
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
