import { TestBed } from '@angular/core/testing';

import { RegistrarUsuariosComponent } from 'src/app/tio/registrar-usuarios/registrar-usuarios.component';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// routes
import { AppRoutingModule } from "src/app/app-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { storageSyncMetaReducer } from 'ngrx-store-persist';
import { taskReducer } from 'src/app/store/tasks.reducer';
import { userReducer } from 'src/app/store/users.reducer';
import { loginReducer } from 'src/app/store/login.reducer';


describe('RegistrarUsuariosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RegistrarUsuariosComponent,
      ],
      imports:[
        FormsModule, 
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
          tasks: taskReducer,
          users: userReducer,
          login: loginReducer
        }, { 
          metaReducers: [storageSyncMetaReducer] 
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  it('Debe retornar usuario valido', () => {
    const comp = TestBed.createComponent(RegistrarUsuariosComponent);
    const nombre = comp.componentInstance.registerForm.controls['nombre'];
    const email = comp.componentInstance.registerForm.controls['email'];
    const password = comp.componentInstance.registerForm.controls['password'];
    nombre.setValue('ejemplo123');
    email.setValue('ejemplo123@prueba.com.pe');
    password.setValue('123456');
    expect(comp.componentInstance.registerForm.valid).toBeTrue();
  });

  it('Debe retornar usuario invalido', () => {
    const comp = TestBed.createComponent(RegistrarUsuariosComponent);
    const nombre = comp.componentInstance.registerForm.controls['nombre'];
    const email = comp.componentInstance.registerForm.controls['email'];
    const password = comp.componentInstance.registerForm.controls['password'];
    nombre.setValue('ejemplo123');
    email.setValue('ejemplo1234567890abcdefghijkmnlopqrstwqxyz1234567890abcdefghijkmnlopqrstwqxyz1234567890abcdefghijkmnlopqrstwqxyz1234567890abcdefghijkmnlopqrstwqxyz@hiper.com.pe');
    password.setValue('123456');
    expect(comp.componentInstance.registerForm.invalid).toBeTrue();
  }); 


});
