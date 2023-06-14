import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LegsComponent } from './legs.component';
import { LegsRoutingModule } from './legs-routing.module';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [LegsComponent],
	imports: [CommonModule, BrowserModule, BrowserAnimationsModule, LegsRoutingModule],
	exports: [LegsComponent]
})
export class MenuModule {}
