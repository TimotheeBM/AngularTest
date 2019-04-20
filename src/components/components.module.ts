import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';

@NgModule({
	declarations: [
		PereComponent,
		FilsComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		PereComponent,
		FilsComponent
	]
})
export class ComponentsModule { }
