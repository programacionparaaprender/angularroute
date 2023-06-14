import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [MenuComponent],
	imports: [CommonModule, BrowserModule, BrowserAnimationsModule, MenuRoutingModule],
	exports: [MenuComponent],
	bootstrap: [MenuComponent]
})
export class MenuModule {}
