import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from 'src/app/services/github.service';

@NgModule({
	imports: [
		CommonModule,
		ContactRoutingModule,
		HttpClientModule,
		ContactComponent,
	],
	exports: [ContactComponent],
	providers: [GithubService],
})
export default class ContactModule {}
