import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
	imports: [CommonModule, AboutRoutingModule],
	exports: [AboutComponent],
	declarations: [AboutComponent],
})
export default class AboutModule {}
