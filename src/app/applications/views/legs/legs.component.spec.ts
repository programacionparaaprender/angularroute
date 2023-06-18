import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
//import { TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LegsComponent } from './legs.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { timer } from 'rxjs';
describe('LegsComponent', () => {
	let component: LegsComponent;
	let fixture: ComponentFixture<LegsComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [
				HttpClientModule,
				RouterTestingModule,
				AppRoutingModule,
				FormsModule,
				ReactiveFormsModule
			],
			declarations: [LegsComponent]
		}).compileComponents();
		fixture = TestBed.createComponent(LegsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	/*
	it('prueba de bienvenida', () => {
		let submitEl = fixture.debugElement.query(By.css('.chipNuevo'));
		expect(submitEl.nativeElement.innerHTML).toBe('Ingresa por servicio');
	});
*/
	
it('Probar legs', () => {
	/* const comp = TestBed.createComponent(LogintobepageComponent);
	comp.componentInstance.codigo1 = "1"; 
	comp.componentInstance.codigo2 = "2"; 
	comp.componentInstance.codigo3 = "3"; 
	comp.componentInstance.codigo4 = "4"; 
	expect(comp.componentInstance.cambiarIcono).toEqual(0);
	const cajasLlenas = comp.componentInstance.cajasLlenas; */
	//expect(cajasLlenas).toBeTrue();
	//tick(5000);
	//expect(comp.componentInstance.cambiarIcono).toEqual(1);
});

});