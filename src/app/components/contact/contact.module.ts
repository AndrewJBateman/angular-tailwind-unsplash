import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ]
})
export default class ContactModule { }
